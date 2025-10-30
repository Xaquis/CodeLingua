// ==============================================
// CodeLingua - Módulo Didáctico (Lin & Codder)
// Autor: Arlevy Sabogal
// ==============================================

window.CodeLingua = window.CodeLingua || {};

(function() {
  const learningModule = {
    mentor: null,
    currentStep: 0,
    steps: [],

    // Inicializa según la unidad
    init() {
      const unit = document.body.dataset.unit;

      if (unit.includes("eng")) {
        this.mentor = "Lin";
        this.steps = [
          {
            mentor: "Lin",
            text: "¡Hola! Soy Lin 🎩🇬🇧. Hoy aprenderás vocabulario técnico esencial en inglés."
          },
          {
            mentor: "Lin",
            text: "Recuerda: una <em>variable</em> en inglés es algo que puede cambiar, como 'variable' en español. 🔤"
          },
          {
            mentor: "Lin",
            text: "Vamos a practicar traduciendo y comprendiendo palabras comunes del entorno tecnológico. 💻"
          }
        ];
      } else if (unit.includes("prog")) {
        this.mentor = "Codder";
        this.steps = [
          {
            mentor: "Codder",
            text: "¡Hola! Soy Codder 🧢💻. Te enseñaré los fundamentos de la programación paso a paso."
          },
          {
            mentor: "Codder",
            text: "Primero entenderemos qué es una <em>variable</em>: piensa en una caja donde guardas datos. 📦"
          },
          {
            mentor: "Codder",
            text: "Luego exploraremos cómo usar condiciones, bucles y lógica básica en los programas. 🧠"
          }
        ];
      }

      this.renderStep();
    },

    // Muestra el paso actual
    renderStep() {
      const dialogueContainer = document.getElementById("mentor-dialogue");
      if (!dialogueContainer) return;

      const step = this.steps[this.currentStep];
      if (!step) {
        this.finishIntro();
        return;
      }

      const bubble = document.createElement("div");
      bubble.className = "mentor-bubble";
      bubble.innerHTML = `<strong>${step.mentor}:</strong> ${step.text}`;
      dialogueContainer.appendChild(bubble);

      // Efecto visual de narración
      if (window.CodeLingua.speak) {
        window.CodeLingua.speak(`${step.mentor} dice: ${step.text.replace(/<[^>]+>/g, '')}`);
      }

      // Avanza al siguiente paso después de 4 segundos
      setTimeout(() => {
        this.currentStep++;
        this.renderStep();
      }, 4000);
    },

    // Cierra la introducción y da paso a las preguntas
    finishIntro() {
      const dialogueContainer = document.getElementById("mentor-dialogue");
      const bubble = document.createElement("div");
      bubble.className = "mentor-bubble";
      bubble.innerHTML = `<strong>${this.mentor}:</strong> ¡Excelente! Ahora pongamos en práctica lo aprendido. 🚀`;
      dialogueContainer.appendChild(bubble);

      if (window.CodeLingua.speak) {
        window.CodeLingua.speak("Excelente, ahora pongamos en práctica lo aprendido.");
      }

      setTimeout(() => {
        const introSection = document.querySelector(".intro-section");
        if (introSection) introSection.scrollIntoView({ behavior: "smooth" });
      }, 2500);
    }
  };

  window.CodeLingua.learningModule = learningModule;

  // Inicialización automática cuando la página carga
  document.addEventListener("DOMContentLoaded", () => learningModule.init());
})();
