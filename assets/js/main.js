// assets/js/main.js
// CodeLingua - Core UI Controller (Theme & Language) v2.1
window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  // Soporte para varios IDs (compatibilidad con HTML viejo)
  const modeToggle = document.getElementById('mode-toggle') || document.getElementById('theme-toggle') || document.querySelector('.theme-toggle');
  const langToggle = document.getElementById('lang-toggle') || document.querySelector('.lang-toggle');

  // Recuperar preferencias (prefijos cl_ para consistencia)
  const savedMode = localStorage.getItem('cl_mode') || 'dark';
  const savedLang = localStorage.getItem('cl_lang') || 'es';

  // Aplicar
  if (savedMode === 'light') body.classList.add('light-mode');
  window.CodeLingua.lang = savedLang;

  // Actualizar texto del botón idioma
  function updateLangButton() {
    if (!langToggle) return;
    langToggle.textContent = window.CodeLingua.lang === 'es' ? '🇬🇧 English' : '🇪🇸 Español';
  }

  // Inicial
  updateLangButton();

  // Eventos
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-mode');
      localStorage.setItem('cl_mode', isLight ? 'light' : 'dark');
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      window.CodeLingua.lang = window.CodeLingua.lang === 'es' ? 'en' : 'es';
      localStorage.setItem('cl_lang', window.CodeLingua.lang);
      updateLangButton();
      // Mejor: no forzar reload si puedes actualizar textos dinámicamente.
      // Para simplicidad en esta etapa: recarga para aplicar cambios.
      location.reload();
    });
  }

  console.log(`🌐 Idioma: ${window.CodeLingua.lang} — Modo: ${body.classList.contains('light-mode') ? 'light' : 'dark'}`);
});
