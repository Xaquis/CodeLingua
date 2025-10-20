// =====================================================
// CodeLingua — Unidad 1: Fundamentos de Programación (Java)
// Autor: Arlevy Sabogal — 2025
// =====================================================

(function () {
  // ===============================
  // VARIABLES PRINCIPALES
  // ===============================
  const exercises = [
    {
      question: "1️⃣ ¿Cómo se declara una variable entera en Java?",
      options: ["int numero;", "integer numero;", "var numero;", "num numero;"],
      correct: 0,
      hint: "Recuerda que Java usa tipos de datos primitivos.",
    },
    {
      question: "2️⃣ ¿Qué palabra se usa para definir una clase en Java?",
      options: ["object", "class", "define", "type"],
      correct: 1,
      hint: "Piensa en Programación Orientada a Objetos.",
    },
    {
      question: "3️⃣ ¿Qué ciclo se usa para repetir mientras una condición es verdadera?",
      options: ["for", "repeat", "loop", "while"],
      correct: 3,
      hint: "Se traduce como 'mientras'.",
    },
    {
      question: "4️⃣ ¿Cómo se imprime texto en la consola en Java?",
      options: [
        "Console.log()",
        "echo()",
        "System.out.println()",
        "print()",
      ],
      correct: 2,
      hint: "Comienza con 'System' y termina con 'println'.",
    },
    {
      question: "5️⃣ ¿Qué tipo de dato puede almacenar valores verdaderos o falsos?",
      options: ["bool", "boolean", "logical", "bit"],
      correct: 1,
      hint: "En Java, esta palabra está completamente escrita.",
    },
  ];

  const totalLives = 10;
  let lives = totalLives;
  let correctAnswers = 0;
  let currentQuestion = 0;
  let isCooldown = false;

  // ===============================
  // ELEMENTOS DEL DOM
  // ===============================
  const lifeDisplay = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const questionContainer = document.getElementById("question-container");
  const feedback = document.getElementById("feedback");
  const completeSection = document.getElementById("complete");

  // ===============================
  // FUNCIONES PRINCIPALES
  // ===============================

  function renderQuestion() {
    const q = exercises[currentQuestion];
    if (!q) return showCompletion();

    questionContainer.innerHTML = `
      <h3>${q.question}</h3>
      <div class="options">
        ${q.options
          .map(
            (opt, index) => `
          <button class="option-btn" data-index="${index}">${opt}</button>
        `
          )
          .join("")}
      </div>
      <p class="hint">💡 Pista: ${q.hint}</p>
    `;

    document.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => checkAnswer(parseInt(btn.dataset.index)));
    });
  }

  function checkAnswer(selected) {
    const q = exercises[currentQuestion];
    if (!q || isCooldown) return;
    isCooldown = true;

    if (selected === q.correct) {
      correctAnswers++;
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "#00FFC6";
    } else {
      lives--;
      feedback.textContent = "❌ Incorrecto. Pierdes una vida.";
      feedback.style.color = "#FF6B6B";
    }

    updateProgress();

    // Esperar antes de la siguiente pregunta
    setTimeout(() => {
      currentQuestion++;
      feedback.textContent = "";
      if (lives <= 0) return handleDefeat();
      renderQuestion();
      isCooldown = false;
    }, 1200);
  }

  function updateProgress() {
    lifeDisplay.textContent = lives;
    const progress = (correctAnswers / exercises.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Progreso: ${Math.round(progress)}%`;
  }

  function handleDefeat() {
    feedback.innerHTML =
      "💀 Te has quedado sin vidas.<br>Vuelve en 5 minutos para intentarlo de nuevo.";
    questionContainer.innerHTML = "";
    disableAllButtons();
    setTimeout(resetLives, 300000); // 5 minutos
  }

  function resetLives() {
    lives = totalLives;
    correctAnswers = 0;
    currentQuestion = 0;
    feedback.textContent = "💪 ¡Tienes vidas nuevas! Inténtalo otra vez.";
    renderQuestion();
    updateProgress();
  }

  function disableAllButtons() {
    document.querySelectorAll(".option-btn").forEach((btn) => {
      btn.disabled = true;
    });
  }

  function showCompletion() {
    questionContainer.innerHTML = "";
    feedback.textContent = "";
    completeSection.classList.remove("hidden");
    window.CodeLingua.saveCompletion(1, "prog");
  }

  // ===============================
  // INICIO
  // ===============================
  renderQuestion();
  updateProgress();
})();
