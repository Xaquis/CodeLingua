// ===============================
// CodeLingua - Unidad 1 Inglés Técnico
// Sistema didáctico + evaluación interactiva
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

  const unit = document.body.dataset.unit;
  console.log(`🎩 Cargando actividades de inglés para ${unit}`);

  // ===============================
  // PREGUNTAS DE LA UNIDAD 1
  // ===============================
  const questions = [
    {
      q: "¿Qué significa 'variable' en inglés técnico?",
      options: [
        "Una función matemática",
        "Algo que puede cambiar",
        "Una palabra reservada"
      ],
      correct: 1
    },
    {
      q: "¿Cómo se dice 'función' en inglés?",
      options: ["Condition", "Loop", "Function"],
      correct: 2
    },
    {
      q: "¿Qué significa 'condition'?",
      options: [
        "Una instrucción repetitiva",
        "Una regla que determina una acción",
        "Un tipo de dato"
      ],
      correct: 1
    },
    {
      q: "¿Cómo se traduce 'loop'?",
      options: ["Bucle", "Variable", "Constante"],
      correct: 0
    },
    {
      q: "¿Qué significa 'debug'?",
      options: [
        "Corregir errores en el código",
        "Escribir código nuevo",
        "Ejecutar un programa"
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
  // VALIDAR RESPUESTA
  // ===============================
  function checkAnswer(selected) {
    const q = questions[currentQuestion];

    if (selected === q.correct) {
      feedback.textContent = "✅ Correct! Well done!";
      feedback.style.color = "#00ff99";
      correctAnswers++;
      updateProgress();
    } else {
      feedback.textContent = "❌ Wrong answer. You lose one life.";
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
    questionText.textContent = "🎩 Excellent! You completed the English Unit 1!";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    window.CodeLingua.saveCompletion?.(1, "eng");
  }

  // ===============================
  // SIN VIDAS
  // ===============================
  function endGame() {
    questionText.textContent = "😢 You ran out of lives. Try again later.";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
  }

  // ===============================
  // INICIO
  // ===============================
  showQuestion();
});
