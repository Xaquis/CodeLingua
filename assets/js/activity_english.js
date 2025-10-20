// ===============================
// CodeLingua - English Activity System v2.0
// Interactivo con Lin 🇬🇧🎩
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const lifeCount = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const feedbackEl = document.getElementById("feedback");
  const questionContainer = document.getElementById("question-container");
  const completeSection = document.getElementById("complete");

  let lives = 10;
  let correctAnswers = 0;
  const totalQuestions = 5;
  const cooldownTime = 5 * 60 * 1000; // 5 minutos

  // 🔒 Comprobar si está en cooldown
  const lastDeath = localStorage.getItem("lastDeathTime_english");
  if (lastDeath && Date.now() - parseInt(lastDeath) < cooldownTime) {
    const remaining = Math.ceil((cooldownTime - (Date.now() - parseInt(lastDeath))) / 60000);
    document.body.innerHTML = `
      <main class="container">
        <h2>⏳ Sin vidas</h2>
        <p>Debes esperar ${remaining} minuto(s) para intentarlo nuevamente.</p>
      </main>
    `;
    return;
  }

  // 📘 Preguntas de inglés técnico — nivel básico
  const questions = [
    {
      type: "multiple",
      q: "What is the English word for 'función'?",
      options: ["function", "loop", "variable", "condition"],
      a: "function",
    },
    {
      type: "truefalse",
      q: "‘Loop’ means a repetition structure in programming.",
      a: "true",
    },
    {
      type: "multiple",
      q: "Choose the correct translation for 'variable'.",
      options: ["constant", "variable", "method", "library"],
      a: "variable",
    },
    {
      type: "truefalse",
      q: "‘If’ is used to declare a function in English.",
      a: "false",
    },
    {
      type: "multiple",
      q: "Select the correct meaning of ‘debug’.",
      options: ["create errors", "fix errors", "ignore code", "write comments"],
      a: "fix errors",
    },
  ];

  let currentQuestion = 0;

  function updateUI() {
    lifeCount.textContent = lives;
    const progress = Math.min((correctAnswers / totalQuestions) * 100, 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Progress: ${Math.floor(progress)}%`;
  }

  function renderQuestion() {
    if (correctAnswers >= totalQuestions) {
      completeUnit();
      return;
    }

    const q = questions[currentQuestion];
    questionContainer.innerHTML = `<p>${q.q}</p>`;

    if (q.type === "multiple") {
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => checkAnswer(opt));
        questionContainer.appendChild(btn);
      });
    } else if (q.type === "truefalse") {
      ["True", "False"].forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => checkAnswer(opt.toLowerCase()));
        questionContainer.appendChild(btn);
      });
    }

    feedbackEl.textContent = "";
  }

  function checkAnswer(selected) {
    const correct = questions[currentQuestion].a.toLowerCase();
    if (selected.toLowerCase() === correct) {
      correctAnswers++;
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.style.color = "#00FFC6";
      updateUI();
      nextQuestion();
    } else {
      lives--;
      feedbackEl.textContent = "❌ Incorrect. Try again!";
      feedbackEl.style.color = "#FF5252";
      if (lives <= 0) {
        localStorage.setItem("lastDeathTime_english", Date.now());
        alert("😢 No lives left. Please wait 5 minutes before retrying.");
        window.location.reload();
        return;
      }
      updateUI();
      nextQuestion();
    }
  }

  function nextQuestion() {
    setTimeout(() => {
      currentQuestion = (currentQuestion + 1) % questions.length;
      renderQuestion();
    }, 1000);
  }

  function completeUnit() {
    feedbackEl.textContent = "🎉 Excellent! You have completed this unit!";
    feedbackEl.style.color = "#00FFC6";
    window.CodeLingua.saveCompletion(1, "eng");
    setTimeout(() => {
      window.location.href = "unit_complete.html?unit=1";
    }, 1500);
  }

  updateUI();
  renderQuestion();
});
