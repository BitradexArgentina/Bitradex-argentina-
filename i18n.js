/* ========================================
   BitradeX Argentina — i18n (Multi-language)
   ES / EN / PT — with video switching
======================================== */

// ── VIDEO URLs POR IDIOMA ──────────────────────────────────────────
// 🔧 EDITA AQUÍ los IDs de tus videos de YouTube o URLs de embed
const VIDEOS = {
  es: "https://www.youtube.com/embed/VIDEO_ID_ESPAÑOL",
  en: "https://www.youtube.com/embed/VIDEO_ID_ENGLISH",
  pt: "https://www.youtube.com/embed/VIDEO_ID_PORTUGUES"
};

// ── WHATSAPP POR IDIOMA (opcional) ────────────────────────────────
const WA_LINKS = {
  es: "https://wa.me/5491112345678?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20BitradeX",
  en: "https://wa.me/5491112345678?text=Hello!%20I%20want%20to%20know%20more%20about%20BitradeX",
  pt: "https://wa.me/5491140826213?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20BitradeX"
};

// ── TRADUCCIONES ───────────────────────────────────────────────────
const translations = {

  // ════════ ESPAÑOL ════════
  es: {
    "hero.tag": "🔥 Exclusivo para Latinoamérica",
    "hero.title1": "El futuro del",
    "hero.title2": "trading digital",
    "hero.title3": "está aquí",
    "hero.sub": "Únete a miles de personas que ya generan ingresos reales con BitradeX. Sin experiencia previa. Sin complicaciones.",
    "hero.cta": "Quiero empezar ahora →",
    "hero.learn": "¿Cómo funciona?",
    "stats.members": "miembros activos",
    "stats.countries": "presencia global",
    "stats.support": "soporte activo",
    "video.label": "▶ Mira este video primero",
    "video.title": "Descubrí por qué BitradeX está cambiando vidas",
    "video.badge": "⚡ Video actualizado semanalmente",
    "how.label": "🔍 El proceso",
    "how.title": "Tres pasos hacia tu libertad financiera",
    "how.step1.title": "Regístrate gratis",
    "how.step1.desc": "Crea tu cuenta en minutos. Sin inversión inicial requerida para comenzar.",
    "how.step2.title": "Aprende y opera",
    "how.step2.desc": "Accedé a capacitaciones exclusivas y comenzá a operar con nuestra plataforma intuitiva.",
    "how.step3.title": "Generá ingresos",
    "how.step3.desc": "Retirá tus ganancias cuando quieras. 100% transparente y verificable.",
    "benefits.label": "✨ Por qué elegirnos",
    "benefits.title": "Todo lo que necesitás en un solo lugar",
    "benefits.b1": "Plataforma regulada y segura",
    "benefits.b2": "Retiros rápidos en 24-48hs",
    "benefits.b3": "Soporte en español 24/7",
    "benefits.b4": "Comunidad privada de traders",
    "benefits.b5": "Materiales de capacitación incluidos",
    "benefits.b6": "Plan de referidos con comisiones reales",
    "benefits.cta": "Unirme a BitradeX →",
    "card.live": "En vivo",
    "card.earnings": "Ganancias del mes",
    "card.joined": "+48 se unieron hoy",
    "testi.label": "💬 Testimonios",
    "testi.title": "Lo que dicen nuestros miembros",
    "testi.t1": '"En tres meses logré reemplazar mi sueldo. BitradeX cambió mi perspectiva del dinero por completo."',
    "testi.t2": '"La comunidad y el soporte son increíbles. Nunca me sentí solo en el proceso. Totalmente recomendable."',
    "testi.t3": '"Empecé sin saber nada de crypto. Hoy manejo mi propio portafolio y genero ingresos pasivos reales."',
    "reg.label": "🚀 Último paso",
    "reg.title": "¿Listo para comenzar?",
    "reg.desc": "Completá el formulario para crear tu landing personalizada y comenzar a compartir BitradeX con tu red.",
    "reg.urgency": "Cupos limitados disponibles este mes",
    "form.name": "Tu nombre completo",
    "form.photo": "URL de tu foto (opcional)",
    "form.reglink": "Tu link de registro en BitradeX",
    "form.wa": "Tu número de WhatsApp",
    "form.submit": "Crear mi landing personalizada →",
    "form.note": "Al registrarte aceptás los términos de uso. Tus datos están protegidos.",
    "success.title": "¡Tu landing fue creada!",
    "success.desc": "Tu URL personalizada es:",
    "success.copy": "Copiar enlace",
    "footer.disclaimer": "BitradeX Argentina es una iniciativa independiente de distribución. Los resultados pueden variar. Invertir en criptomonedas implica riesgo. Consultá a un asesor financiero antes de invertir."
  },

  // ════════ ENGLISH ════════
  en: {
    "hero.tag": "🔥 Exclusive for Latin America",
    "hero.title1": "The future of",
    "hero.title2": "digital trading",
    "hero.title3": "is here",
    "hero.sub": "Join thousands of people already generating real income with BitradeX. No prior experience needed. No complications.",
    "hero.cta": "I want to start now →",
    "hero.learn": "How does it work?",
    "stats.members": "active members",
    "stats.countries": "global presence",
    "stats.support": "active support",
    "video.label": "▶ Watch this video first",
    "video.title": "Discover why BitradeX is changing lives",
    "video.badge": "⚡ Video updated weekly",
    "how.label": "🔍 The process",
    "how.title": "Three steps to your financial freedom",
    "how.step1.title": "Sign up for free",
    "how.step1.desc": "Create your account in minutes. No initial investment required to get started.",
    "how.step2.title": "Learn and trade",
    "how.step2.desc": "Access exclusive training and start trading with our intuitive platform.",
    "how.step3.title": "Generate income",
    "how.step3.desc": "Withdraw your earnings whenever you want. 100% transparent and verifiable.",
    "benefits.label": "✨ Why choose us",
    "benefits.title": "Everything you need in one place",
    "benefits.b1": "Regulated and secure platform",
    "benefits.b2": "Fast withdrawals in 24-48hrs",
    "benefits.b3": "24/7 English support",
    "benefits.b4": "Private trader community",
    "benefits.b5": "Training materials included",
    "benefits.b6": "Referral plan with real commissions",
    "benefits.cta": "Join BitradeX →",
    "card.live": "Live",
    "card.earnings": "Monthly earnings",
    "card.joined": "+48 joined today",
    "testi.label": "💬 Testimonials",
    "testi.title": "What our members say",
    "testi.t1": '"In three months I managed to replace my salary. BitradeX completely changed my perspective on money."',
    "testi.t2": '"The community and support are incredible. I never felt alone in the process. Totally recommended."',
    "testi.t3": '"I started knowing nothing about crypto. Today I manage my own portfolio and generate real passive income."',
    "reg.label": "🚀 Last step",
    "reg.title": "Ready to start?",
    "reg.desc": "Fill out the form to create your personalized landing page and start sharing BitradeX with your network.",
    "reg.urgency": "Limited spots available this month",
    "form.name": "Your full name",
    "form.photo": "Your photo URL (optional)",
    "form.reglink": "Your BitradeX registration link",
    "form.wa": "Your WhatsApp number",
    "form.submit": "Create my personalized landing →",
    "form.note": "By registering you accept the terms of use. Your data is protected.",
    "success.title": "Your landing was created!",
    "success.desc": "Your personalized URL is:",
    "success.copy": "Copy link",
    "footer.disclaimer": "BitradeX Argentina is an independent distribution initiative. Results may vary. Investing in cryptocurrencies involves risk. Consult a financial advisor before investing."
  },

  // ════════ PORTUGUÊS ════════
  pt: {
    "hero.tag": "🔥 Exclusivo para a América Latina",
    "hero.title1": "O futuro do",
    "hero.title2": "trading digital",
    "hero.title3": "chegou",
    "hero.sub": "Junte-se a milhares de pessoas que já geram renda real com a BitradeX. Sem experiência prévia. Sem complicações.",
    "hero.cta": "Quero começar agora →",
    "hero.learn": "Como funciona?",
    "stats.members": "membros ativos",
    "stats.countries": "presença global",
    "stats.support": "suporte ativo",
    "video.label": "▶ Assista este vídeo primeiro",
    "video.title": "Descubra por que a BitradeX está mudando vidas",
    "video.badge": "⚡ Vídeo atualizado semanalmente",
    "how.label": "🔍 O processo",
    "how.title": "Três passos para sua liberdade financeira",
    "how.step1.title": "Cadastre-se grátis",
    "how.step1.desc": "Crie sua conta em minutos. Sem investimento inicial necessário para começar.",
    "how.step2.title": "Aprenda e opere",
    "how.step2.desc": "Acesse treinamentos exclusivos e comece a operar com nossa plataforma intuitiva.",
    "how.step3.title": "Gere renda",
    "how.step3.desc": "Retire seus ganhos quando quiser. 100% transparente e verificável.",
    "benefits.label": "✨ Por que nos escolher",
    "benefits.title": "Tudo que você precisa em um só lugar",
    "benefits.b1": "Plataforma regulamentada e segura",
    "benefits.b2": "Saques rápidos em 24-48h",
    "benefits.b3": "Suporte em português 24/7",
    "benefits.b4": "Comunidade privada de traders",
    "benefits.b5": "Materiais de treinamento incluídos",
    "benefits.b6": "Plano de referidos com comissões reais",
    "benefits.cta": "Entrar na BitradeX →",
    "card.live": "Ao vivo",
    "card.earnings": "Ganhos do mês",
    "card.joined": "+48 entraram hoje",
    "testi.label": "💬 Depoimentos",
    "testi.title": "O que dizem nossos membros",
    "testi.t1": '"Em três meses consegui substituir meu salário. A BitradeX mudou completamente minha perspectiva sobre dinheiro."',
    "testi.t2": '"A comunidade e o suporte são incríveis. Nunca me senti sozinho no processo. Totalmente recomendado."',
    "testi.t3": '"Comecei sem saber nada sobre cripto. Hoje gerencio meu próprio portfólio e gero renda passiva real."',
    "reg.label": "🚀 Último passo",
    "reg.title": "Pronto para começar?",
    "reg.desc": "Preencha o formulário para criar sua landing personalizada e começar a compartilhar a BitradeX com sua rede.",
    "reg.urgency": "Vagas limitadas disponíveis este mês",
    "form.name": "Seu nome completo",
    "form.photo": "URL da sua foto (opcional)",
    "form.reglink": "Seu link de registro na BitradeX",
    "form.wa": "Seu número do WhatsApp",
    "form.submit": "Criar minha landing personalizada →",
    "form.note": "Ao se cadastrar você aceita os termos de uso. Seus dados estão protegidos.",
    "success.title": "Sua landing foi criada!",
    "success.desc": "Sua URL personalizada é:",
    "success.copy": "Copiar link",
    "footer.disclaimer": "BitradeX Argentina é uma iniciativa independente de distribuição. Os resultados podem variar. Investir em criptomoedas envolve risco. Consulte um assessor financeiro antes de investir."
  }
};

// ── CURRENT LANG ──────────────────────────────────────────────────
let currentLang = localStorage.getItem('btx_lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('btx_lang', lang);

  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update video
  const videoEl = document.getElementById('main-video');
  if (videoEl && VIDEOS[lang]) {
    videoEl.src = VIDEOS[lang];
  }

  // Update WhatsApp link
  const waBtn = document.getElementById('waFloat');
  if (waBtn && WA_LINKS[lang]) {
    waBtn.href = WA_LINKS[lang];
  }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
