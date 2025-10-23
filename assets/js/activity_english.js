window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const lifeCount = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedback = document.getElementById("feedback");
  const completeSection = document.getElementById("complete");

  let lives = 10;
  let score = 0;
  let currentQuestion = 0;

  const questions = [
    {
      text: "¿Cómo se traduce al inglés la palabra “Variable”?",
      options: ["Variable", "Constant", "Loop"],
      answer: "Variable",
      hint: "Es un contenedor que cambia su valor."
    },
    {
      text: "¿Cuál es la traducción correcta de 'Función'?",
      options: ["Loop", "Function", "Class"],
      answer: "Function",
      hint: "Agrupa código reutilizable."
    },
    {
      text: "¿Cómo se dice 'Bucle' en inglés técnico?",
      options: ["Loop", "Condition", "Branch"],
      answer: "Loop",
      hint: "Repite instrucciones varias veces."
    },
    {
      text: "Selecciona la traducción correcta de 'Booleano':",
      options: ["Boolean", "Number", "Character"],
      answer: "Boolean",
      hint: "Solo puede ser verdadero o falso."
    },
    {
      text: "¿Qué palabra se usa para decir 'Compilar'?",
      options: ["Compile", "Execute", "Print"],
      answer: "Compile",
      hint: "Convierte código fuente en ejecutable."
    }
  ];

  function renderQuestion() {
    if (currentQuestion >= questions.length) return finishUnit();

    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.classList.add("check");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt, q.answer, q.hint);
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selected, correct, hint) {
    if (selected === correct) {
      score++;
      feedback.textContent = "✅ Correcto!";
      feedback.style.color = "#00ff99";
    } else {
      lives--;
      feedback.textContent = `❌ Incorrecto. Respuesta correcta: "${correct}". Pista: ${hint}`;
      feedback.style.color = "#ff5555";
    }

    updateProgress();
    setTimeout(() => {
      currentQuestion++;
      renderQuestion();
    }, 1800);
  }

  function updateProgress() {
    lifeCount.textContent = lives;
    const progressPercent = Math.floor((score / questions.length) * 100);
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `Progreso: ${progressPercent}%`;

    if (lives <= 0) {
      feedback.textContent = "💀 Te quedaste sin vidas. Reintenta en 5 minutos.";
      optionsContainer.innerHTML = "";
    }
  }

  function finishUnit() {
    questionText.textContent = "";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    completeSection.classList.remove("hidden");
  }

  renderQuestion();
});
