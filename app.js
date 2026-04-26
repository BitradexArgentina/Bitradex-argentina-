/* ========================================
   BitradeX Argentina — App Logic
   Form + Firebase + URL Generation
======================================== */

// ── FIREBASE CONFIG ───────────────────────────────────────────────
// 🔧 REEMPLAZA ESTOS VALORES con los de tu proyecto Firebase
// Ve a: https://console.firebase.google.com → Tu proyecto → Configuración
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// ── FIREBASE INIT (usando CDN en index.html) ──────────────────────
// Se inicializa solo si Firebase está disponible
let db = null;

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined') {
      firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      console.log('✅ Firebase conectado');
    } else {
      console.warn('⚠️ Firebase no disponible. Modo demo activo.');
    }
  } catch (e) {
    console.warn('⚠️ Firebase error:', e.message);
  }
}

// ── UTILS ─────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function getCurrentBaseUrl() {
  return window.location.origin;
}

// ── FORM HANDLER ──────────────────────────────────────────────────
async function handleRegistro(event) {
  event.preventDefault();

  const nombre = document.getElementById('fname').value.trim();
  const foto = document.getElementById('fphoto').value.trim();
  const reglink = document.getElementById('freglink').value.trim();
  const whatsapp = document.getElementById('fwhatsapp').value.trim();

  if (!nombre || !reglink || !whatsapp) {
    alert('Por favor completá todos los campos requeridos.');
    return;
  }

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Creando tu landing...';
  submitBtn.disabled = true;

  try {
    const slug = slugify(nombre);
    const uid = generateId();
    const userData = {
      uid,
      nombre,
      foto: foto || '',
      reglink,
      whatsapp,
      slug,
      fecha: new Date().toISOString(),
      lang: currentLang || 'es'
    };

    // Guardar en Firebase si está disponible
    if (db) {
      await db.collection('usuarios').doc(uid).set(userData);
      console.log('✅ Usuario guardado en Firebase:', uid);
    } else {
      // Modo demo: guardar en localStorage
      const demos = JSON.parse(localStorage.getItem('btx_demo_users') || '[]');
      demos.push(userData);
      localStorage.setItem('btx_demo_users', JSON.stringify(demos));
      console.log('📦 Guardado en demo (localStorage)');
    }

    // Mostrar URL generada
    const landingUrl = `${getCurrentBaseUrl()}/u/${slug}-${uid}`;
    showSuccess(landingUrl, userData);

  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error. Por favor intentá de nuevo.');
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

function showSuccess(url, userData) {
  document.getElementById('registroForm').style.display = 'none';
  const successDiv = document.getElementById('formSuccess');
  successDiv.style.display = 'block';
  document.getElementById('successUrl').textContent = url;
  successDiv.dataset.url = url;
  successDiv.dataset.userData = JSON.stringify(userData);

  // Scroll to success
  successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function copyUrl() {
  const url = document.getElementById('successUrl').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.querySelector('.form-success .btn-primary');
      const original = btn.textContent;
      btn.textContent = '✓ Copiado!';
      setTimeout(() => btn.textContent = original, 2000);
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const animEls = document.querySelectorAll('.step-card, .testi-card, .card-glow');
  animEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
}

// ── PERSONAL LANDING LOADER ───────────────────────────────────────
// Se activa si la URL tiene formato /u/slug-uid
async function loadPersonalLanding() {
  const path = window.location.pathname;
  const match = path.match(/^\/u\/(.+)$/);
  if (!match) return;

  const parts = match[1].split('-');
  const uid = parts[parts.length - 1];

  let userData = null;

  // Intentar cargar desde Firebase
  if (db) {
    try {
      const doc = await db.collection('usuarios').doc(uid).get();
      if (doc.exists) userData = doc.data();
    } catch (e) {
      console.error('Firebase read error:', e);
    }
  }

  // Fallback a localStorage (demo)
  if (!userData) {
    const demos = JSON.parse(localStorage.getItem('btx_demo_users') || '[]');
    userData = demos.find(u => u.uid === uid);
  }

  if (userData) {
    applyPersonalData(userData);
  } else {
    console.warn('Usuario no encontrado para:', uid);
  }
}

function applyPersonalData(data) {
  // Personalizar WhatsApp
  const waNumber = data.whatsapp.replace(/\D/g, '');
  const waBtn = document.getElementById('waFloat');
  if (waBtn) waBtn.href = `https://wa.me/${waNumber}`;

  // Reemplazar todos los links de registro
  document.querySelectorAll('a[href="#registro"]').forEach(a => {
    if (data.reglink) a.href = data.reglink;
  });
  document.querySelectorAll('.btn-primary[href="#registro"]').forEach(a => {
    if (data.reglink) a.href = data.reglink;
  });

  // Ocultar formulario de registro, mostrar CTA directo
  const formWrap = document.querySelector('.registro-form-wrap');
  if (formWrap) {
    formWrap.innerHTML = `
      <div class="personal-cta-card">
        ${data.foto ? `<img src="${data.foto}" alt="${data.nombre}" class="personal-photo">` : `<div class="personal-avatar">${data.nombre.charAt(0).toUpperCase()}</div>`}
        <h3 class="personal-name">${data.nombre}</h3>
        <p class="personal-sub">Te invita a unirte a BitradeX</p>
        <a href="${data.reglink}" target="_blank" class="btn-primary full" style="margin-bottom:16px;">
          Registrarme ahora →
        </a>
        <a href="https://wa.me/${data.whatsapp.replace(/\D/g,'')}?text=Hola!%20Vi%20tu%20landing%20de%20BitradeX" target="_blank" class="btn-wa-contact">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Contactar por WhatsApp
        </a>
      </div>
    `;
    addPersonalStyles();
  }
}

function addPersonalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .personal-cta-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px 32px;
      text-align: center;
    }
    .personal-photo {
      width: 90px; height: 90px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--gold);
      margin-bottom: 16px;
    }
    .personal-avatar {
      width: 90px; height: 90px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--gold), #e09f20);
      display: flex; align-items: center; justify-content: center;
      font-size: 2.5rem; font-weight: 800; color: #000;
      margin: 0 auto 16px;
      border: 3px solid var(--gold);
    }
    .personal-name {
      font-family: var(--font-head);
      font-size: 1.6rem;
      font-weight: 800;
      margin-bottom: 6px;
    }
    .personal-sub {
      color: var(--muted);
      margin-bottom: 28px;
    }
    .btn-wa-contact {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: #25d366;
      color: #fff;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 0.95rem;
      width: 100%;
      transition: all .2s;
    }
    .btn-wa-contact:hover { opacity: 0.9; transform: translateY(-2px); }
  `;
  document.head.appendChild(style);
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  initScrollAnimations();
  loadPersonalLanding();
});
