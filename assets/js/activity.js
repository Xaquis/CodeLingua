// ===============================
// CodeLingua - Activity System v2.0
// Aprendizaje interactivo con vidas, progreso y regeneración
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const lifeCount = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const completeSection = document.getElementById("complete");

  let lives = 10;
  let correctAnswers = 0;
  let currentQuestion = 0;
  const totalQuestions = 5;
  const cooldownTime = 5 * 60 * 1000; // 5 minutos

  // --- Verificar si está en cooldown ---
  const lastDeath = localStorage.getItem("lastDeathTime");
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

  // --- Preguntas (nivel inicial - Java) ---
  const questions = [
    { q: "¿Qué palabra se usa para declarar una variable en Java?", a: "int" },
    { q: "¿Qué instrucción imprime texto en Java?", a: "System.out.println" },
    { q: "¿Qué estructura se usa para repetir código?", a: "for" },
    { q: "¿Qué tipo de dato almacena texto?", a: "String" },
    { q: "¿Qué palabra define una función?", a: "void" },
  ];

  const questionEl = document.getElementById("question");
  const answerEl = document.getElementById("answer");
  const feedbackEl = document.getElementById("feedback");
  const checkBtn = document.getElementById("check-btn");

  function updateUI() {
    lifeCount.textContent = lives;
    const progress = Math.min((correctAnswers / totalQuestions) * 100, 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Progreso: ${Math.floor(progress)}%`;
  }

  function newQuestion() {
    if (correctAnswers >= totalQuestions) {
      completeUnit();
      return;
    }
    currentQuestion = Math.floor(Math.random() * questions.length);
    questionEl.textContent = questions[currentQuestion].q;
    answerEl.value = "";
    feedbackEl.textContent = "";
  }

  function completeUnit() {
    feedbackEl.textContent = "🎉 ¡Unidad completada con éxito!";
    feedbackEl.style.color = "#00FFC6";
    window.CodeLingua.saveCompletion(1, "prog");
    setTimeout(() => {
      window.location.href = "unit_complete.html?unit=1";
    }, 1500);
  }

  checkBtn.addEventListener("click", () => {
    const answer = answerEl.value.trim().toLowerCase();
    const correct = questions[currentQuestion].a.toLowerCase();

    if (answer === correct) {
      correctAnswers++;
      feedbackEl.textContent = "✅ ¡Correcto!";
      feedbackEl.style.color = "#00FFC6";
      updateUI();
      setTimeout(newQuestion, 1000);
    } else {
      lives--;
      feedbackEl.textContent = "❌ Incorrecto. Se ha generado una nueva pregunta.";
      feedbackEl.style.color = "#FF5252";

      if (lives <= 0) {
        localStorage.setItem("lastDeathTime", Date.now());
        alert("😢 Te has quedado sin vidas. Vuelve en 5 minutos.");
        window.location.reload();
        return;
      }

      updateUI();
      setTimeout(newQuestion, 1200);
    }
  });

  updateUI();
  newQuestion();
});
