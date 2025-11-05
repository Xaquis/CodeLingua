// ======================================================
// CodeLingua - Learning Module v2.0 (141125)
// Control de idioma, tema, progreso y mentor virtual
// ======================================================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  console.log("🎩 CodeLingua Learning Module iniciado");

  // ==============================
  // 🌐 DETECCIÓN Y CAMBIO DE IDIOMA
  // ==============================
  const langToggle = document.getElementById("lang-toggle");
  const userLang = localStorage.getItem("cl_lang") || detectUserLang();

  window.CodeLingua.lang = userLang;
  document.documentElement.lang = userLang;

  if (langToggle) {
    langToggle.textContent = userLang === "es" ? "🌐" : "🇬🇧";
    langToggle.lang = userLang;

    langToggle.addEventListener("click", () => {
      const newLang = window.CodeLingua.lang === "es" ? "en" : "es";
      localStorage.setItem("cl_lang", newLang);
      window.CodeLingua.lang = newLang;
      document.documentElement.lang = newLang;
      location.reload();
    });
  }

  function detectUserLang() {
    const lang = navigator.language.startsWith("es") ? "es" : "en";
    localStorage.setItem("cl_lang", lang);
    return lang;
  }

  // ==============================
  // 🌓 CAMBIO DE TEMA (OSCURO/CLARO)
  // ==============================
  const themeToggle = document.getElementById("theme-toggle");
  const userTheme = localStorage.getItem("cl_theme") || "dark";

  if (userTheme === "light") document.body.classList.add("light-mode");

  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
      localStorage.setItem("cl_theme", theme);
      themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
    });
  }

  // ==============================
  // 🎩 LIN - MENTOR VIRTUAL BRITÁNICO
  // ==============================
  const mentorName = "Lin";
  const greeting = {
    es: [
      "¡Hola! Soy Lin 🎩🇬🇧, tu mentor en inglés técnico.",
      "Juntos exploraremos vocabulario, estructuras y expresiones del mundo IT.",
      "¡Empecemos cuando estés listo!"
    ],
    en: [
      "Hello! I'm Lin 🎩🇬🇧, your mentor in technical English.",
      "Together we'll explore IT vocabulary, structures, and expressions.",
      "Let's begin when you're ready!"
    ]
  };

  const mentorBox = document.getElementById("mentor-dialogue");
  if (mentorBox) {
    mentorBox.innerHTML = "";
    let idx = 0;
    const lines = greeting[window.CodeLingua.lang];
    const interval = setInterval(() => {
      if (idx < lines.length) {
        const msg = document.createElement("div");
        msg.classList.add("mentor-bubble");
        msg.innerHTML = `<strong>${mentorName}:</strong> ${lines[idx]}`;
        mentorBox.appendChild(msg);
        idx++;
      } else clearInterval(interval);
    }, 1800);
  }

  // ==============================
  // 🧩 GESTIÓN DE PROGRESO
  // ==============================
  window.CodeLingua.getMentorName = (id) => (id === "lin" ? "Lin 🎩🇬🇧" : "Codder 🤖");

  window.CodeLingua.saveCompletion = async function (unit, type) {
    const user = localStorage.getItem("cl_user") || "defaultUser";
    const progress = { unit, type, completed: true, date: new Date().toISOString() };
    await window.CodeLingua.syncProgress(user, unit, progress);
  };

  console.log("✅ Learning Module cargado correctamente");
});
