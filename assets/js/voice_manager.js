// ==========================================================
// CodeLingua - Voice Manager (TTS centralizado para Lin y Codder)
// Autor: Arlevy Sabogal
// Descripción: Sistema de voz natural para los mentores de CodeLingua
// Compatible con narrador.js y módulos didácticos
// ==========================================================

window.CodeLingua = window.CodeLingua || {};

(function() {
  const synth = window.speechSynthesis;
  let voices = [];
  let ready = false;

  // ======== CARGA DE VOCES ========
  function loadVoices() {
    voices = synth.getVoices();

    if (voices.length === 0) {
      // Algunos navegadores cargan las voces con retardo
      setTimeout(loadVoices, 250);
      return;
    }

    ready = true;
    console.log("🔊 [VoiceManager] Voces cargadas:", voices.length);
  }

  // Evento especial para navegadores basados en Chrome
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }

  // ======== FUNCIÓN PRINCIPAL ========
  window.CodeLingua.speak = function(text, lang = "en-GB", mentor = "Lin") {
    if (!ready) loadVoices();

    if (!("speechSynthesis" in window)) {
      console.warn("⚠️ [VoiceManager] TTS no soportado, mostrando texto.");
      showTextBubble(text, mentor);
      return;
    }

    // Cancelar cualquier narración previa
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    utterance.volume = 0.95;
    utterance.lang = lang;

    // Seleccionar voz preferida (según el mentor)
    if (voices.length > 0) {
      if (mentor === "Lin") {
        utterance.voice = voices.find(v => v.lang === "en-GB") || voices[0];
      } else if (mentor === "Codder") {
        utterance.voice = voices.find(v => v.lang === "es-ES") || voices[0];
      }
    }

    // Mostrar subtítulo visual
    showTextBubble(`${mentor}: ${text}`, mentor);

    // Reproducir voz
    synth.speak(utterance);
  };

  // ======== BURBUJA VISUAL ========
  function showTextBubble(text, mentor) {
    const existing = document.querySelector(".speech-bubble");
    if (existing) existing.remove();

    const bubble = document.createElement("div");
    bubble.className = "speech-bubble";
    bubble.textContent = text;

    // Estilo adicional según mentor
    if (mentor === "Lin") bubble.style.borderColor = "#00B8FF";
    if (mentor === "Codder") bubble.style.borderColor = "#00FFC6";

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 5000);
  }
})();
