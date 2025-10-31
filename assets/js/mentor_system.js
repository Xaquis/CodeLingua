// =======================================================
// CodeLingua - Sistema de Mentoría con IA Básica (Codder & Lin)
// Día 13 — Mejora Didáctica + Interacción Inteligente
// =======================================================

window.CodeLingua = window.CodeLingua || {};

(() => {
  const mentors = {
    codder: {
      name: "Codder 🧢💻",
      tone: "amigable",
      messages: [
        "¡Hola! Soy Codder y te enseñaré los fundamentos de la programación. 🚀",
        "Recuerda: una variable es como una caja donde guardas datos. 📦",
        "Si fallas, no pasa nada. ¡Aprender es parte del proceso! 💪",
        "¿Quieres un consejo? Prueba a escribir el código tú mismo. 😉"
      ]
    },
    lin: {
      name: "Lin 🎩🇬🇧",
      tone: "elegante",
      messages: [
        "Hello there! Soy Lin y te enseñaré inglés técnico. 🇬🇧✨",
        "‘Variable’ en inglés se pronuncia igual, pero se escribe igual también. 🔤",
        "Cada palabra técnica tiene su contexto en programación. 💬",
        "Si te confundes, yo te mostraré la respuesta correcta. 😊"
      ]
    }
  };

  // Detecta quién es el mentor según el dataset del body
  const currentMentor =
    document.body.dataset.unit?.includes("eng") ? mentors.lin : mentors.codder;

  const dialogueBox = document.getElementById("mentor-dialogue");

  // ✅ Render inicial
  if (dialogueBox) {
    const intro = document.createElement("div");
    intro.className = "mentor-bubble";
    intro.innerHTML = `<strong>${currentMentor.name}:</strong> ${
      currentMentor.messages[0]
    }`;
    dialogueBox.appendChild(intro);
  }

  // ✅ Mecanismo simple de IA didáctica
  window.CodeLingua.askMentor = function (question) {
    const reply = document.createElement("div");
    reply.className = "mentor-bubble";

    // Sistema de respuestas muy básicas
    const q = question.toLowerCase();
    let answer = "";

    if (q.includes("variable")) answer = currentMentor.messages[1];
    else if (q.includes("error")) answer = "Revisemos juntos el código. 🔍 ¿Qué línea falló?";
    else if (q.includes("función") || q.includes("function"))
      answer = "Una función agrupa instrucciones que puedes usar varias veces. 🔁";
    else if (q.includes("hola")) answer = `¡Hola! Soy ${currentMentor.name}. 😊`;
    else answer = currentMentor.messages[Math.floor(Math.random() * currentMentor.messages.length)];

    reply.innerHTML = `<strong>${currentMentor.name}:</strong> ${answer}`;
    dialogueBox?.appendChild(reply);

    // Mantener scroll abajo
    dialogueBox.scrollTop = dialogueBox.scrollHeight;
  };
})();
