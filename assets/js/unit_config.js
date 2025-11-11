// ======================================================
// CodeLingua v2.0 (Producción Final)
// Configuración Global de Unidades y Mentores
// ======================================================

window.CodeLingua = window.CodeLingua || {};

// ===============================
// CONFIGURACIÓN GLOBAL DE UNIDADES
// ===============================
window.CodeLingua.units = {
  unit1_prog: {
    mentor: "Codder",
    settings: {
      lives: 10,
      lang: "es",
      type: "programming"
    },
    intro: [
      "👋 ¡Hola! Soy Codder 🤖, tu mentor en esta unidad.",
      "Hoy exploraremos los fundamentos de la programación.",
      "Comenzaremos entendiendo qué son las variables y cómo los programas toman decisiones paso a paso.",
      "No te preocupes por equivocarte: cada error es una oportunidad para aprender."
    ]
  },

  unit2_eng: {
    mentor: "Lin",
    settings: {
      lives: 10,
      lang: "en",
      type: "english"
    },
    intro: [
      "Welcome! I’m Lin 🇬🇧, your mentor for the Technical English unit.",
      "We’ll learn basic technology vocabulary and how to use it in real programming contexts.",
      "Follow me carefully — practice makes perfect!"
    ]
  }
};

// ===============================
// FUNCIONES AUXILIARES
// ===============================
window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.units = {
  unit1_prog: { mentor: "Codder", type: "programming", lang: "es" },
  java_fundamentals: { mentor: "Codder", type: "java", lang: "es" },
  sql_essentials: { mentor: "Codder", type: "sql", lang: "es" },
  python_basics: { mentor: "Codder", type: "python", lang: "es" },
  english_unit1: { mentor: "Lin", type: "english", lang: "en" },
};

window.CodeLingua.getUnitConfig = function (unitId) {
  return window.CodeLingua.units[unitId] || null;
};
