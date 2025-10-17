// ===============================
// CodeLingua - Main Interaction
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const validThemes = ['light', 'dark'];
  const savedTheme = validThemes.includes(localStorage.getItem('theme'))
    ? localStorage.getItem('theme')
    : 'dark';

  document.body.classList.toggle('light-mode', savedTheme === 'light');
  themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // --- Language toggle ---
  const langToggle = document.getElementById('lang-toggle');
  const validLangs = ['es', 'en'];
  const savedLang = validLangs.includes(localStorage.getItem('lang'))
    ? localStorage.getItem('lang')
    : 'es';

  langToggle.textContent = savedLang === 'en' ? '🇺🇸' : '🇪🇸';
  document.documentElement.lang = savedLang;

  const dictionary = {
    es: {
      title: "Aprende Programación e Inglés",
      intro: "Bienvenido a CodeLingua, donde aprenderás idiomas y código al mismo tiempo.",
    },
    en: {
      title: "Learn Programming and English",
      intro: "Welcome to CodeLingua, where you learn languages and code together.",
    },
  };

  function updateLanguage(lang) {
    const titleEl = document.getElementById('page-title');
    const introEl = document.querySelector('.intro-text');
    if (titleEl && introEl) {
      titleEl.textContent = dictionary[lang].title;
      introEl.textContent = dictionary[lang].intro;
    }
  }

  updateLanguage(savedLang);

  langToggle.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = newLang;
    langToggle.textContent = newLang === 'en' ? '🇺🇸' : '🇪🇸';
    localStorage.setItem('lang', newLang);
    updateLanguage(newLang);
  });
});
