// ===========================================================
// CodeLingua v2.0 - UI Controller
// Gestión de tema, idioma y narrador
// Autor: Arlevy Sabogal
// ===========================================================

window.CodeLingua = window.CodeLingua || {};

// ===============================
// CONFIGURACIÓN INICIAL
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🧠 UI Controller cargado");

  // Inicializar idioma automáticamente
  CodeLingua.detectLanguage();

  // Aplicar tema desde almacenamiento local
  CodeLingua.applyTheme(localStorage.getItem("cl_theme") || "dark");

  // Asignar listeners a botones si existen
  CodeLingua.setupUIControls();

  // Inicializar narrador (si está activado)
  if (localStorage.getItem("cl_voice") === "on") {
    CodeLingua.voiceEnabled = true;
  }
});

// ===============================
// SISTEMA DE IDIOMA
// ===============================
CodeLingua.detectLanguage = function () {
  let lang = localStorage.getItem("cl_lang");

  if (!lang) {
    const browserLang = navigator.language.toLowerCase();
    lang = browserLang.startsWith("en") ? "en" : "es";
    localStorage.setItem("cl_lang", lang);
  }

  CodeLingua.lang = lang;
  document.documentElement.lang = lang;
  console.log(`🌐 Idioma detectado: ${lang}`);
};

CodeLingua.toggleLanguage = function () {
  CodeLingua.lang = CodeLingua.lang === "es" ? "en" : "es";
  localStorage.setItem("cl_lang", CodeLingua.lang);
  document.documentElement.lang = CodeLingua.lang;
  console.log(`🌐 Idioma cambiado a: ${CodeLingua.lang}`);
  location.reload(); // recargar para aplicar traducciones
};

// ===============================
// SISTEMA DE TEMA (Dark / Light)
// ===============================
CodeLingua.applyTheme = function (mode) {
  document.body.classList.toggle("light-mode", mode === "light");
  localStorage.setItem("cl_theme", mode);
  console.log(`🎨 Tema aplicado: ${mode}`);
};

CodeLingua.toggleTheme = function () {
  const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
  CodeLingua.applyTheme(newTheme);
};

// ===============================
// NARRADOR (Web Speech API)
// ===============================
CodeLingua.voiceEnabled = false;

CodeLingua.speak = function (text) {
  if (!CodeLingua.voiceEnabled || !window.speechSynthesis) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = CodeLingua.lang === "en" ? "en-US" : "es-ES";
  utter.rate = 1.05;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
};

CodeLingua.toggleVoice = function () {
  CodeLingua.voiceEnabled = !CodeLingua.voiceEnabled;
  localStorage.setItem("cl_voice", CodeLingua.voiceEnabled ? "on" : "off");

  if (CodeLingua.voiceEnabled) {
    CodeLingua.speak(CodeLingua.lang === "es" ? 
      "Narrador activado." : 
      "Voice narrator enabled.");
  } else {
    speechSynthesis.cancel();
  }

  console.log(`🔊 Narrador: ${CodeLingua.voiceEnabled ? "activo" : "inactivo"}`);
};

// ===============================
// INTERFAZ DE CONTROL
// ===============================
CodeLingua.setupUIControls = function () {
  const btnTheme = document.getElementById("btn-theme");
  const btnLang = document.getElementById("btn-lang");
  const btnVoice = document.getElementById("btn-voice");

  if (btnTheme) btnTheme.addEventListener("click", CodeLingua.toggleTheme);
  if (btnLang) btnLang.addEventListener("click", CodeLingua.toggleLanguage);
  if (btnVoice) btnVoice.addEventListener("click", CodeLingua.toggleVoice);

  console.log("🧩 Controles UI inicializados");
};

// ===============================
// UTILIDAD GLOBAL
// ===============================
CodeLingua.say = function (text) {
  CodeLingua.speak(text);
};
