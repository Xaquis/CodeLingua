// ===============================
// CodeLingua - Unidad 1 Programación
// Modo didáctico + ejercicios interactivos
// ===============================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");
  const progressText = document.getElementById("progress");
  const feedback = document.getElementById("feedback");

  let lives = 10;
  let correctCount = 0;

  // Mostrar mensaje al inicio
  console.log("🚀 CodeLingua - Unidad de Programación lista");

  // ========= DIDÁCTICA (controlada por learning_module.js) =========
  // Si learning_module no la controla, podemos iniciar manualmente los ejercicios
  if (!window.CodeLingua.learningReady) {
    window.CodeLingua.learningReady = function () {
      const exSection = document.getElementById("exercises");
      if (exSection) exSection.classList.remove("hidden");
      console.log("✅ Fase didáctica completada. Ejercicios desbloqueados.");
    };
  }

  // ========= VALIDACIÓN DE EJERCICIOS =========
  exercises.forEach((exercise) => {
    const input = exercise.querySelector("input");
    const button = exercise.querySelector(".check");
    const feedback = exercise.querySelector(".exercise-feedback");
    const correctAnswer = exercise.dataset.answer.trim().toLowerCase();
    const freeTries = parseInt(exercise.dataset.freeTries || 0);
    let tries = 0;
    let answered = false;

    button.addEventListener("click", () => {
      if (answered) return;

      const userAnswer = input.value.trim().toLowerCase();
      tries++;

      if (userAnswer === correctAnswer) {
        exercise.classList.remove("wrong");
        exercise.classList.add("correct");
        feedback.textContent = "✅ ¡Correcto! Bien hecho.";
        feedback.style.color = "#00ff99";
        answered = true;
        correctCount++;

        updateProgress();

        // Si completa los 5 ejercicios, mostrar finalización
        if (correctCount >= exercises.length) {
          completeUnit();
        }
      } else {
        exercise.classList.remove("correct");
        exercise.classList.add("wrong");
        feedback.textContent = `❌ Incorrecto. ${
          tries > freeTries ? "Perdiste una vida." : "Inténtalo de nuevo."
        }`;
        feedback.style.color = "#FF5E5E";

        // Restar vida si superó los intentos gratis
        if (tries > freeTries) {
          lives--;
          lifeCount.textContent = lives;

          if (lives <= 0) {
            endGame();
          }
        }
      }
    });
  });

  // ========= FUNCIONES =========
  function updateProgress() {
    const percent = Math.floor((correctCount / exercises.length) * 100);
    progressBar.style.width = percent + "%";
    progressText.textContent = `Progreso: ${percent}%`;
  }

  function completeUnit() {
    document.getElementById("exercises").classList.add("hidden");
    document.getElementById("complete").classList.remove("hidden");

    // Guardar progreso
    window.CodeLingua.saveCompletion?.(1, "prog");
    console.log("🏁 Unidad completada por el usuario.");
  }

  function endGame() {
    document.getElementById("exercises").classList.add("hidden");
    const mentor = document.getElementById("mentor-dialogue");
    mentor.innerHTML = `
      <div class="mentor-bubble"><strong>Codder:</strong> 😢 Te has quedado sin vidas,
      pero no pasa nada. En unos minutos podrás intentarlo otra vez.</div>`;
    setTimeout(() => location.reload(), 300000); // 5 minutos
  }
});
