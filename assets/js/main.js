// assets/js/main.js
// ======================================================
// CodeLingua: Control global de tema, idioma y eventos
// Autor: Arlevy Sabogal
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
  const qs = (s) => document.querySelector(s);

  const themeToggle = qs('#theme-toggle');
  const langToggle = qs('#lang-toggle');

  // Seguridad por si no existen los botones
  if (!themeToggle || !langToggle) {
    console.warn('⚠️ Controles de tema o idioma no encontrados en esta página.');
  }

  // ======== TEMA ========
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      const newTheme = isLight ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  }

  function applyTheme(theme, persist = true) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      if (themeToggle) themeToggle.textContent = '☀️';
    } else {
      document.body.classList.remove('light-mode');
      if (themeToggle) themeToggle.textContent = '🌙';
    }
    if (persist) localStorage.setItem('theme', theme);
  }

  // ======== IDIOMA ========
  const savedLang = localStorage.getItem('lang') || 'es';
  applyLang(savedLang, false);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current = document.documentElement.lang || savedLang;
      const next = current === 'es' ? 'en' : 'es';
      applyLang(next, true);
    });
  }

  function applyLang(lang, persist = true) {
    document.documentElement.lang = lang;
    if (langToggle) langToggle.textContent = (lang === 'en') ? '🇺🇸' : '🇪🇸';
    if (persist) localStorage.setItem('lang', lang);
    notifyLangChange(lang);
  }

  function notifyLangChange(lang) {
    window.CodeLingua = window.CodeLingua || {};
    window.CodeLingua.currentLang = lang;

    if (typeof window.CodeLingua.onLangChange === 'function') {
      try { window.CodeLingua.onLangChange(lang); } catch (e) { console.warn(e); }
    }
    if (typeof window.CodeLingua.onMentorLangChange === 'function') {
      try { window.CodeLingua.onMentorLangChange(lang); } catch (e) { console.warn(e); }
    }

    document.dispatchEvent(new CustomEvent('codelingua:langchange', { detail: { lang } }));
  }

  // API global
  window.CodeLingua = window.CodeLingua || {};
  window.CodeLingua.getLang = () => document.documentElement.lang || 'es';
  window.CodeLingua.getTheme = () =>
    document.body.classList.contains('light-mode') ? 'light' : 'dark';
});
