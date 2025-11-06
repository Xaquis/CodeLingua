// ==========================================================
// CodeLingua - UI Controller (Theme & Language)
// Autor: Arlevy Sabogal
// Versión: v2.0 - 14/11/25
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

// ================ CONTROL DE INTERFAZ =====================
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const modeToggle = document.getElementById("mode-toggle");
  const langToggle = document.getElementById("lang-toggle");

  // ====== MODO OSCURO / CLARO ======
  const savedMode = localStorage.getItem("cl_mode") || "dark";
  if (savedMode === "light") body.classList.add("light-mode");
  updateModeButton();

  // ====== IDIOMA ACTUAL ======
  const savedLang = window.CodeLingua.lang;
  updateLangButton();

  // ====== EVENTO: CAMBIO DE MODO ======
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const newMode = body.classList.contains("light-mode") ? "light" : "dark";
      localStorage.setItem("cl_mode", newMode);
      updateModeButton();
    });
  }

  // ====== EVENTO: CAMBIO DE IDIOMA ======
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      window.CodeLingua.lang = window.CodeLingua.lang === "es" ? "en" : "es";
      localStorage.setItem("cl_lang", window.CodeLingua.lang);
      updateLangButton();
      // Recarga para actualizar textos en toda la página
      location.reload();
    });
  }

  // ====== FUNCIONES AUXILIARES ======
  function updateLangButton() {
    if (langToggle) {
      langToggle.textContent = window.CodeLingua.t("lang_switch");
    }
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
// CodeLingua v2.1 - Detección automática de sección activa
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#main-nav a");
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const pageKey = link.dataset.page;
    if (currentPath.includes(pageKey)) {
      link.classList.add("active");
      console.log(`📘 Página activa: ${pageKey}`);
    } else {
      link.classList.remove("active");
    }
  });
});
