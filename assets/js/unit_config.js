// =======================================
// CodeLingua - Configuración Global
// Mantenible, modular y reusable (CMMI / ISO 25010)
// =======================================

window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.config = {
  global: {
    defaultLives: 10,
    freeTries: 1,
    retryDelay: 300000, // 5 minutos
    transitionDelay: 1000,
    progressStep: 20,
    languages: ["es", "en"],
    currentLang: "es",
    mentors: {
      codder: "🧢💻 Codder",
      lin: "🎩🇬🇧 Lin",
    },
  },

  units: {
    // ==========================
    // 🧢 Unidad 1: Programación
    // ==========================
    unit1_prog: {
      mentor: "codder",
      intro: [
        "¡Hola! Soy Codder 🧢💻 y seré tu guía en esta unidad.",
        "Imagina que una variable es como una caja 📦 donde guardas datos.",
        "Las funciones son grupos de instrucciones reutilizables.",
        "Y los bucles repiten tareas, como practicar hasta dominar algo. 🔁",
        "¿Listo para programar? 🚀",
      ],
      settings: {
        lives: 10,
        freeTries: 1,
      },
    },

    // ==========================
    // 🎩 Unidad 1: Inglés Técnico
    // ==========================
    unit1_eng: {
      mentor: "lin",
      intro: [
        "🎩 Hello there! Soy Lin y te acompañaré a aprender inglés técnico.",
        "Hoy aprenderás vocabulario esencial del mundo de la programación. 💻",
        "Recuerda: ¡no se trata solo de traducir, sino de comprender cómo se usa! ✨",
        "Si fallas, te mostraré la respuesta correcta para que mejores. 💪",
        "Let's go! 🚀",
      ],
      settings: {
        lives: 10,
        freeTries: 2,
      },
    },
  },
};

// =======================================
// Funciones utilitarias globales
// =======================================
window.CodeLingua.getUnitConfig = function (unitId) {
  return window.CodeLingua.config.units[unitId] || null;
};

window.CodeLingua.getMentorName = function (id) {
  const mentor = window.CodeLingua.config.global.mentors[id];
  return mentor ? mentor : "Mentor";
};

console.log("🧩 CodeLingua Config cargada correctamente.");
