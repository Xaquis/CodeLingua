
// ===============================================
// CodeLingua - Módulo de Inglés Técnico
// Autor: Arlevy Sabogal (2025)
// ===============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("🎩 Lin: English module loaded!");

  const exercises = [
    { question: "Traduce al inglés: “Variable”.", answer: "variable", hint: "Empieza con 'v' y se escribe igual en inglés." },
    { question: "¿Cómo se dice “bucle” o “ciclo” en inglés?", answer: "loop", hint: "Empieza con 'l'." },
    { question: "¿Qué palabra describe un conjunto de instrucciones reutilizables en código?", answer: "function", hint: "Empieza con 'f'." },
    { question: "¿Qué tipo de dato puede ser solo true o false?", answer: "boolean", hint: "Empieza con 'b'." },
    { question: "Escribe la palabra clave en inglés que se usa para condiciones.", answer: "if", hint: "Solo dos letras." }
  ];

  let currentIndex = 0;
  let correctAnswers = 0;
  let lives = 10;
  let isWaiting = false;
  const regenerationTime = 5 * 60 * 1000; // 5 minutos

  const questionContainer = document.getElementById("exercises");
  const livesEl = document.getElementById("life-count");
  const feedbackEl = document.createElement("p");
  const progressBar = document.createElement("div");

  progressBar.id = "progress-bar";
  progressBar.style.height = "10px";
  progressBar.style.borderRadius = "8px";
  progressBar.style.background = "#00B8FF";
  progressBar.style.width = "0%";
  progressBar.style.marginTop = "8px";
  questionContainer.prepend(progressBar);
  questionContainer.appendChild(feedbackEl);

  const completeSection = document.getElementById("complete");

  function renderQuestion() {
    const exerciseList = questionContainer.querySelectorAll(".exercise");
    exerciseList.forEach((ex, i) => {
      ex.style.display = i === currentIndex ? "block" : "none";
    });
    feedbackEl.textContent = "";
  }

  function checkAnswer(input, correctAnswer, hint) {
    if (isWaiting) return;
    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
      feedbackEl.textContent = "✅ ¡Correcto!";
      feedbackEl.style.color = "#00FFC6";
      correctAnswers++;
      updateProgress();

      if (correctAnswers >= 5) {
        completeSection.classList.remove("hidden");
        questionContainer.style.display = "none";
        return;
      }

      currentIndex++;
      if (currentIndex < exercises.length) {
        isWaiting = true;
        setTimeout(() => {
          isWaiting = false;
          renderQuestion();
        }, 1000);
      }
    } else {
      lives--;
      feedbackEl.textContent = `❌ Incorrecto. Pista: ${hint}`;
      feedbackEl.style.color = "#FF4C4C";
      updateLives();
      if (lives <= 0) gameOver();
    }
  }

  function updateProgress() {
    const percent = (correctAnswers / exercises.length) * 100;
    progressBar.style.width = `${percent}%`;
  }

  function updateLives() {
    livesEl.textContent = lives;
  }

  function gameOver() {
    feedbackEl.textContent = "💀 Has perdido todas tus vidas. Espera 5 minutos para reintentar.";
    feedbackEl.style.color = "#FF4C4C";
    isWaiting = true;
    localStorage.setItem("eng_lives_blocked_until", Date.now() + regenerationTime);
    setTimeout(() => {
      lives = 10;
      updateLives();
      feedbackEl.textContent = "💪 Tus vidas han sido regeneradas. ¡Intenta de nuevo!";
      feedbackEl.style.color = "#00FFC6";
      isWaiting = false;
      currentIndex = 0;
      correctAnswers = 0;
      updateProgress();
      renderQuestion();
    }, regenerationTime);
  }

  const blockedUntil = localStorage.getItem("eng_lives_blocked_until");
  if (blockedUntil && Date.now() < blockedUntil) {
    const remaining = Math.ceil((blockedUntil - Date.now()) / 60000);
    feedbackEl.textContent = `🕓 Espera ${remaining} minutos para que se regeneren tus vidas.`;
    feedbackEl.style.color = "#FF4C4C";
    isWaiting = true;
    return;
  }

  const buttons = questionContainer.querySelectorAll(".check");
  buttons.forEach((btn, i) => {
    const input = btn.previousElementSibling;
    const correctAnswer = exercises[i].answer;
    const hint = exercises[i].hint;
    btn.addEventListener("click", () => checkAnswer(input, correctAnswer, hint));
  });

  renderQuestion();
  updateLives();
  updateProgress();
  console.log("🎩 Lin está lista para enseñar inglés técnico.");
});
