// assets/js/mentor_system.js
window.MentorSystem = (function () {

  const mentors = {
    lin: {
      name: "Lin",
      icon: "🎩🇬🇧",
      tone: "formal-friendly",
      intro: [
        "¡Hola! Soy Lin 🎩 y hoy aprenderás vocabulario técnico básico en inglés.",
        "Recuerda: los programadores también piensan en inglés.",
        "¡Veamos algunos ejemplos antes de comenzar!"
      ],
      aiResponses: {
        "variable": "¡Muy bien! Variable se traduce igual: ‘variable’. Se usa igual en programación.",
        "loop": "Correcto, ‘loop’ es un bucle, una estructura que repite acciones.",
        "function": "Excelente, ‘function’ agrupa instrucciones reutilizables.",
        "boolean": "Exacto, ‘boolean’ significa verdadero o falso.",
        "if": "¡Bien! ‘If’ significa ‘si’ en inglés condicional."
      }
    },

    coder: {
      name: "Coder",
      icon: "🧢💻",
      tone: "enthusiastic",
      intro: [
        "¡Hey, soy Coder! 🧢💻 Hoy aprenderás los fundamentos de la programación.",
        "Todo programa empieza con una idea, pero necesita orden, lógica y estructura.",
        "Vamos a explorar los conceptos básicos con ejemplos simples. ¡Listo!"
      ],
      aiResponses: {
        "variable": "Una variable guarda un valor. Piensa en ella como una caja con nombre.",
        "loop": "Un ‘loop’ repite una acción hasta que dejes de necesitarlo. ¡Muy útil!",
        "function": "Una función agrupa código para reutilizarlo, ¡como una receta!",
        "boolean": "‘Boolean’ solo puede ser verdadero o falso. Es el alma de la lógica.",
        "if": "‘If’ significa ‘si’. Permite que el programa tome decisiones."
      }
    }
  };

  let activeMentor = "lin";

  function setMentor(name) {
    if (mentors[name]) activeMentor = name;
  }

  function getIntro() {
    return mentors[activeMentor].intro;
  }

  function respondToAnswer(answer) {
    const lower = answer.toLowerCase().trim();
    return mentors[activeMentor].aiResponses[lower] ||
      "Hmm... no estoy seguro de eso. Revisa el concepto e inténtalo de nuevo.";
  }

  function showMentorMessage(message, type = "normal") {
    const container = document.getElementById("mentor-dialogue");
    if (!container) return;
    const bubble = document.createElement("div");
    bubble.className = `mentor-bubble ${type}`;
    bubble.innerHTML = `${mentors[activeMentor].icon} ${message}`;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }

  return { setMentor, getIntro, respondToAnswer, showMentorMessage };
})();
