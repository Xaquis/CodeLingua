// assets/js/narrator.js
// ======================================================
// CodeLingua - Sistema de narrador/mentor (Codder y Lin)
// Autor: Arlevy Sabogal
// ======================================================

window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.speak = function (text, lang = null, mentor = 'Lin') {
  const chosenLang =
    lang || window.CodeLingua.getLang?.() || document.documentElement.lang || 'es';

  // Si existe un manejador de voz
  if (typeof window.CodeLingua.voiceSpeak === 'function') {
    try {
      window.CodeLingua.voiceSpeak(text, chosenLang, mentor);
      return;
    } catch (e) {
      console.warn('Error al usar voice manager:', e);
    }
  }

  // Mostrar burbuja visual (fallback)
  const old = document.querySelector('.speech-bubble');
  if (old) old.remove();

  const bubble = document.createElement('div');
  bubble.className = 'speech-bubble';
  bubble.textContent = (mentor ? mentor + ': ' : '') + text;
  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 4000);
};

// Reacciona al cambio de idioma global
window.CodeLingua.onMentorLangChange = function (lang) {
  window.CodeLingua._mentorLang = lang;
  const msg = lang === 'en'
    ? 'Interface set to English.'
    : 'Interfaz cambiada a Español.';

  const bubble = document.createElement('div');
  bubble.className = 'mentor-bubble';
  bubble.style.position = 'fixed';
  bubble.style.bottom = '80px';
  bubble.style.right = '20px';
  bubble.style.background = 'rgba(0,0,0,0.75)';
  bubble.style.color = '#fff';
  bubble.style.padding = '8px 12px';
  bubble.style.borderRadius = '8px';
  bubble.textContent = msg;
  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 2000);
};
