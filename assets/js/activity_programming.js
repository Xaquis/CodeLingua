// ===============================
// CodeLingua - Unidad 1 Programación (modo didáctico + IA)
// ===============================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const lifeCount = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedback = document.getElementById("feedback");

  let lives = 10;
  let currentQuestion = 0;
  let correctAnswers = 0;

  const unit = document.body.dataset.unit; // ← ahora detecta la unidad
  console.log(`🚀 Cargando actividades para ${unit}`);

  // ===============================
  // PREGUNTAS DE LA UNIDAD 1
  // ===============================
  const questions = [
    {
      q: "¿Qué es una variable?",
      options: [
        "Un error de sintaxis",
        "Un espacio donde guardas datos",
        "Una función repetitiva"
      ],
      correct: 1
    },
    {
      q: "¿Qué palabra reservada se usa para definir una variable en JavaScript?",
      options: ["var", "func", "if"],
      correct: 0
    },
    {
      q: "¿Qué hace un condicional (if)?",
      options: [
        "Repite instrucciones",
        "Ejecuta código según una condición",
        "Guarda datos en memoria"
      ],
      correct: 1
    },
    {
      q: "¿Qué es una función?",
      options: [
        "Un conjunto de instrucciones reutilizables",
        "Un tipo de variable",
        "Una estructura de datos"
      ],
      correct: 0
    },
    {
      q: "¿Qué es un bucle (loop)?",
      options: [
        "Una instrucción que repite tareas hasta cumplir una condición",
        "Un error de compilación",
        "Un tipo de variable"
      ],
      correct: 0
    }
  ];

  // ===============================
  // MOSTRAR PREGUNTA
  // ===============================
  function showQuestion() {
    if (currentQuestion >= questions.length) {
      completeUnit();
      return;
    }

    const q = questions[currentQuestion];
    questionText.textContent = q.q;
    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("btn");
      btn.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(btn);
    });
  }

  // ===============================
  // VERIFICAR RESPUESTA
  // ===============================
  function checkAnswer(selected) {
    const q = questions[currentQuestion];

    if (selected === q.correct) {
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "#00ff99";
      correctAnswers++;
      updateProgress();
    } else {
      feedback.textContent = "❌ Incorrecto. Pierdes una vida.";
      feedback.style.color = "#ff5e5e";
      lives--;
      lifeCount.textContent = lives;

      if (lives <= 0) {
        endGame();
        return;
      }
    }

    currentQuestion++;
    setTimeout(showQuestion, 1200);
  }

  // ===============================
  // PROGRESO
  // ===============================
  function updateProgress() {
    const percent = Math.floor((correctAnswers / questions.length) * 100);
    progressBar.style.width = percent + "%";
    progressText.textContent = `Progreso: ${percent}%`;
  }

  // ===============================
  // COMPLETAR UNIDAD
  // ===============================
  function completeUnit() {
    questionText.textContent = "🎉 ¡Excelente trabajo! Has completado la Unidad 1.";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    window.CodeLingua.saveCompletion?.(1, "prog");
  }

  // ===============================
  // SIN VIDAS
  // ===============================
  function endGame() {
    questionText.textContent = "😢 Te has quedado sin vidas. Puedes intentarlo de nuevo en unos minutos.";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
  }

  // ===============================
  // INICIO
  // ===============================
  showQuestion();
});
