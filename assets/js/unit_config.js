// ======================================================
// CodeLingua v2.0 (141125)
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
      "¡Hola! Soy Codder 🧢💻, y hoy exploraremos los fundamentos de la programación.",
      "Empezaremos entendiendo qué es una variable y cómo los programas piensan paso a paso.",
      "No te preocupes si fallas, ¡aprender de los errores es parte del código!"
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
      "Welcome! I'm Lin 🎩🇬🇧, your mentor in this technical English unit.",
      "We'll learn basic technology terms and how to pronounce them correctly.",
      "Let’s start by practicing the most common programming words."
    ]
  }
};

// ===============================
// FUNCIONES AUXILIARES
// ===============================

/**
 * Devuelve la configuración completa de la unidad según el ID.
 */
window.CodeLingua.getUnitConfig = function (unitId) {
  return window.CodeLingua.units[unitId] || null;
};

/**
 * Retorna el nombre correcto del mentor según su identificador.
 */
window.CodeLingua.getMentorName = function (id) {
  const names = {
    Codder: "Codder",
    Lin: "Lin"
  };
  return names[id] || "Mentor";
};

/**
 * Guarda el progreso de una unidad completada en localStorage.
 */
window.CodeLingua.saveCompletion = function (unitNumber, type) {
  const key = `cl_unit${unitNumber}_${type}_done`;
  localStorage.setItem(key, "true");
  console.log(`💾 Unidad ${unitNumber} (${type}) completada y guardada.`);
};
