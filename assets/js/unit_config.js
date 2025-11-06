// assets/js/unit_config.js
// CodeLingua v2.0 - Configuración global de unidades (limpia)
// Evitar caracteres raros/UTF problems.

window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.units = {
  unit1_prog: {
    mentor: "Codder",
    settings: {
      lives: 10,
      lang: "es",
      type: "programming"
    },
    intro: [
      "¡Hola! Soy Codder, y hoy exploraremos los fundamentos de la programación.",
      "Empezaremos entendiendo qué es una variable y cómo piensan los programas paso a paso.",
      "No te preocupes si fallas: aprender de los errores es parte del proceso."
    ]
  },

  unit1_eng: {
    mentor: "Lin",
    settings: {
      lives: 10,
      lang: "en",
      type: "english"
    },
    intro: [
      "Welcome! I'm Lin, your mentor for this technical English unit.",
      "We'll learn basic tech terms and practice pronunciation and meaning.",
      "Don't worry if you make mistakes — it's how you learn!"
    ]
  }
};

// helpers
window.CodeLingua.getUnitConfig = function (unitId) {
  return window.CodeLingua.units[unitId] || null;
};

window.CodeLingua.getMentorName = function (id) {
  const names = { Codder: "Codder", Lin: "Lin" };
  return names[id] || "Mentor";
};

window.CodeLingua.saveCompletion = function (unitNumber, type) {
  const key = `cl_unit${unitNumber}_${type}_done`;
  localStorage.setItem(key, "true");
  console.log(`✓ Unidad ${unitNumber} (${type}) completada.`);
};
