// ===============================
// CodeLingua - Unidad 1 Java Story Mode + Narración
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const storyTitle = document.getElementById("story-title");
  const storyText = document.getElementById("story-text");
  const storyCode = document.getElementById("story-code");
  const storyQuestion = document.getElementById("story-question");
  const questionText = document.getElementById("question-text");
  const questionOptions = document.getElementById("question-options");
  const nextBtn = document.getElementById("next-btn");

  let currentScene = 0;

  const storyData = [
    {
      title: "El nacimiento de Java ☕",
      text: "En 1995, un grupo de ingenieros de Sun Microsystems desarrolló un lenguaje que cambiaría la historia de la programación. Lo llamaron *Java*. Su objetivo: crear software que funcionara en cualquier máquina.",
      code: `"Write once, run anywhere" // Escríbelo una vez, ejecútalo en cualquier lugar`,
      mentor: "Java nació con una misión: que tu código pudiera funcionar en cualquier computadora del planeta 🌍.",
      question: {
        text: "¿Qué buscaban los creadores de Java?",
        options: [
          { text: "Un lenguaje exclusivo para Windows", correct: false },
          { text: "Un lenguaje universal y portátil", correct: true },
          { text: "Un lenguaje para videojuegos", correct: false },
        ],
      },
    },
    {
      title: "Tu primer programa en Java 💻",
      text: "Todo programador empieza con el clásico 'Hola Mundo'. En Java, este programa demuestra la estructura básica del lenguaje.",
      code: `class HolaMundo {
  public static void main(String[] args) {
    System.out.println("¡Hola, Java!");
  }
}`,
      mentor: "Observa la estructura: una clase, un método y una instrucción para imprimir. ¡Es el corazón de Java! ❤️",
      question: {
        text: "¿Qué imprime este programa?",
        options: [
          { text: "Hola Java!", correct: false },
          { text: "¡Hola, Java!", correct: true },
          { text: "Error de compilación", correct: false },
        ],
      },
    },
    {
      title: "Programación Orientada a Objetos 🧱",
      text: "Java introdujo un enfoque basado en *objetos*. Cada objeto representa algo del mundo real: un vehículo, una persona o una ventana.",
      code: `class Coche {
  String color;
  void arrancar() {
    System.out.println("El coche está arrancando 🚗");
  }
}`,
      mentor: "En Java, todo gira alrededor de los objetos. Cada clase es como un molde que da forma a las cosas del mundo real. 🚗",
      question: {
        text: "¿Qué representa la clase 'Coche'?",
        options: [
          { text: "Un objeto real con propiedades y acciones", correct: true },
          { text: "Un simple texto sin función", correct: false },
          { text: "Un error de sintaxis", correct: false },
        ],
      },
    },
    {
      title: "¡Excelente trabajo! 🎉",
      text: "Has completado la introducción a Java. Ahora conoces su origen, su estructura y su filosofía.",
      code: "",
      mentor: "Fantástico trabajo 💪 Has aprendido los pilares de Java. En la siguiente unidad exploraremos variables y métodos.",
      question: null,
    },
  ];

  function loadScene(index) {
    const scene = storyData[index];
    if (!scene) return;

    storyTitle.textContent = scene.title;
    storyText.innerHTML = scene.text;
    storyCode.textContent = scene.code || "";
    storyQuestion.classList.add("hidden");
    nextBtn.classList.add("hidden");

    window.CodeLingua.speak("Codder", scene.mentor, 400);

    if (scene.question) {
      setTimeout(() => showQuestion(scene.question), 2000);
    } else {
      nextBtn.textContent = "Finalizar Unidad 🏁";
      nextBtn.classList.remove("hidden");
    }
  }

  function showQuestion(question) {
    questionText.textContent = question.text;
    questionOptions.innerHTML = "";

    question.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.textContent = opt.text;

      btn.addEventListener("click", () => {
        if (opt.correct) {
          window.CodeLingua.speak("Codder", "✅ ¡Excelente! Has comprendido el concepto.", 200);
          currentScene++;
          setTimeout(() => loadScene(currentScene), 1500);
        } else {
          window.CodeLingua.speak("Codder", "❌ No exactamente, intenta de nuevo.", 200);
        }
      });

      questionOptions.appendChild(btn);
    });

    storyQuestion.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", () => {
    if (currentScene < storyData.length - 1) {
      currentScene++;
      loadScene(currentScene);
    } else {
      storyTitle.textContent = "Fin de la Unidad ☕";
      storyText.innerHTML = "Excelente trabajo. Has aprendido los fundamentos de Java. 🚀";
      storyCode.textContent = "";
      storyQuestion.classList.add("hidden");
      nextBtn.classList.add("hidden");
      window.CodeLingua.speak("Codder", "🎓 ¡Unidad completada con éxito!", 300);
    }
  });

  loadScene(currentScene);
});
