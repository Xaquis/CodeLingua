// ==========================================================
// CodeLingua - UI Controller (Theme & Language)
// Autor: Arlevy Sabogal
// Versión: v2.2 - 15/11/25
// ==========================================================

window.CodeLingua = window.CodeLingua || {};

// ================ CONFIGURACIÓN DE IDIOMA =================
window.CodeLingua.lang = localStorage.getItem("cl_lang") || "es";

window.CodeLingua.t = function (key) {
  const texts = {
    es: {
      mode_dark: "🌙 Modo oscuro",
      mode_light: "☀️ Modo claro",
      lang_switch: "🇬🇧 English",
      correct: "✅ ¡Correcto! Bien hecho.",
      incorrect: "❌ Incorrecto.",
      lostLife: "❌ Incorrecto. Perdiste una vida.",
      tryAgain: "🔁 Inténtalo de nuevo.",
      progress: "Progreso",
      lives: "Vidas",
    },
    en: {
      mode_dark: "🌙 Dark Mode",
      mode_light: "☀️ Light Mode",
      lang_switch: "🇪🇸 Español",
      correct: "✅ Correct! Well done.",
      incorrect: "❌ Incorrect.",
      lostLife: "❌ Incorrect. You lost a life.",
      tryAgain: "🔁 Try again.",
      progress: "Progress",
      lives: "Lives",
    }
  };
  return texts[window.CodeLingua.lang][key] || key;
};

// ==========================================================
// INTERFAZ PRINCIPAL (Tema, Idioma y Navegación)
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const modeToggle = document.getElementById("mode-toggle");
  const langToggle = document.getElementById("lang-toggle");

  // ====== CARGAR MODO Y LENGUAJE ======
  const savedMode = localStorage.getItem("cl_mode") || "dark";
  const savedLang = localStorage.getItem("cl_lang") || "es";
  window.CodeLingua.lang = savedLang;

  if (savedMode === "light") body.classList.add("light-mode");

  updateModeButton();
  updateLangButton();
  applyTranslations(savedLang);

  // ====== CAMBIO DE MODO ======
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const newMode = body.classList.contains("light-mode") ? "light" : "dark";
      localStorage.setItem("cl_mode", newMode);
      updateModeButton();
    });
  }

  // ====== CAMBIO DE IDIOMA ======
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      window.CodeLingua.lang = window.CodeLingua.lang === "es" ? "en" : "es";
      localStorage.setItem("cl_lang", window.CodeLingua.lang);
      updateLangButton();
      applyTranslations(window.CodeLingua.lang);
    });
  }

  // ====== NAVEGACIÓN ACTIVA ======
  const navLinks = document.querySelectorAll("#main-nav a");
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const pageKey = link.dataset.page;
    if (currentPath.includes(pageKey)) link.classList.add("active");
    else link.classList.remove("active");
  });

  // ====== FUNCIONES AUXILIARES ======
  function updateLangButton() {
    if (langToggle) langToggle.textContent = window.CodeLingua.t("lang_switch");
  }

  function updateModeButton() {
    if (modeToggle) {
      const textKey = body.classList.contains("light-mode") ? "mode_dark" : "mode_light";
      modeToggle.textContent = window.CodeLingua.t(textKey);
    }
  }

  console.log(`🌐 Idioma activo: ${window.CodeLingua.lang}`);
  console.log(`🌓 Modo: ${body.classList.contains("light-mode") ? "Claro" : "Oscuro"}`);
});

// ==========================================================
// SISTEMA DE TRADUCCIONES GLOBALES
// ==========================================================
const translations = {
  es: {
    title: "Unidad 1 - Fundamentos de Programación",
    startProgramming: "Iniciar Programación",
    startEnglish: "Iniciar Inglés Técnico",
    startStory: "Modo Historia Java",
    about: "Acerca de",
    videoLabel: "Inserta aquí el enlace de tu video de presentación:",
    footer: "CodeLingua v2.0 — Creado por Arlevy Sabogal"
  },
  en: {
    title: "Unit 1 - Programming Fundamentals",
    startProgramming: "Start Programming",
    startEnglish: "Start Technical English",
    startStory: "Java Story Mode",
    about: "About",
    videoLabel: "Insert your presentation video link here:",
    footer: "CodeLingua v2.0 — Created by Arlevy Sabogal"
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.title = t.title;

  // Reemplazar elementos comunes (si existen)
  const el = (id, text) => {
    const e = document.getElementById(id);
    if (e) e.textContent = text;
  };

  el("start-programming", t.startProgramming);
  el("start-english", t.startEnglish);
  el("start-story", t.startStory);
  el("about-link", t.about);
  el("video-label", t.videoLabel);
  el("footer-text", t.footer);
}
