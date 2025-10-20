// ====================================
// CodeLingua — Future UX Core
// Autor: Arlevy Sabogal (2025)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 CodeLingua (Future UX) inicializado correctamente");

  // ===============================
  // 🔧 Developer Mode
  // ===============================
  if (localStorage.getItem('devMode') !== 'true') {
    console.log("🛠️ Activa el modo desarrollador con: localStorage.setItem('devMode','true')");
  }

  // ===============================
  // 🌗 THEME TOGGLE
  // ===============================
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const validThemes = ['light', 'dark'];
    const savedTheme = validThemes.includes(localStorage.getItem('theme'))
      ? localStorage.getItem('theme')
      : 'dark';

    document.body.classList.toggle('light-mode', savedTheme === 'light');
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      const newTheme = isLight ? 'light' : 'dark';
      themeToggle.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', newTheme);

      // 🌈 Transición visual suave
      document.body.classList.add('theme-transition');
      setTimeout(() => document.body.classList.remove('theme-transition'), 600);
    });
  }

  // ===============================
  // 🌐 LANGUAGE TOGGLE
  // ===============================
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const validLangs = ['es', 'en'];
    const savedLang = validLangs.includes(localStorage.getItem('lang'))
      ? localStorage.getItem('lang')
      : 'es';

    langToggle.textContent = savedLang === 'en' ? '🇺🇸' : '🇪🇸';
    document.documentElement.lang = savedLang;

    // Diccionario principal
    const dictionary = {
      es: {
        title: "Aprende programación e inglés técnico al mismo tiempo",
        intro: "Bienvenido a CodeLingua, donde aprenderás idiomas y código al mismo tiempo.",
        startProg: "Unidad 1 - Programación",
        startEng: "Unidad 1 - Inglés",
      },
      en: {
        title: "Learn programming and technical English at the same time",
        intro: "Welcome to CodeLingua, where you learn languages and code together.",
        startProg: "Unit 1 - Programming",
        startEng: "Unit 1 - English",
      },
    };

    function updateLanguage(lang) {
      const data = dictionary[lang];
      const titleEl = document.getElementById('page-title') || document.querySelector('h2');
      const introEl = document.querySelector('.intro-text');
      const btnProg = document.querySelector('.btn[href*="programming"]');
      const btnEng = document.querySelector('.btn[href*="english"]');

      if (titleEl) titleEl.textContent = data.title;
      if (introEl) introEl.textContent = data.intro;
      if (btnProg) btnProg.textContent = data.startProg;
      if (btnEng) btnEng.textContent = data.startEng;
    }

    // Aplica el idioma guardado
    updateLanguage(savedLang);

    // Evento de cambio
    langToggle.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'es' ? 'en' : 'es';
      document.documentElement.lang = newLang;
      langToggle.textContent = newLang === 'en' ? '🇺🇸' : '🇪🇸';
      localStorage.setItem('lang', newLang);
      updateLanguage(newLang);
    });
  }
});
