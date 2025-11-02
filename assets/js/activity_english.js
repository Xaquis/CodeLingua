// ======================================================
// CodeLingua - Unidad 1 Inglés Técnico (v2)
// Integración con unit_config.js
// ======================================================

// ===============================
// CodeLingua - Sistema de Idiomas
// ===============================
window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.lang = localStorage.getItem("cl_lang") || "es";

window.CodeLingua.t = function (key) {
  const texts = {
    es: {
      correct: "✅ ¡Correcto! Bien hecho.",
      incorrect: "❌ Incorrecto.",
      lostLife: "❌ Incorrecto. Perdiste una vida.",
      tryAgain: "🔁 Inténtalo de nuevo.",
      progress: "Progreso",
      lives: "Vidas",
    },
    en: {
      correct: "✅ Correct! Well done.",
      incorrect: "❌ Incorrect.",
      lostLife: "❌ Incorrect. You lost a life.",
      tryAgain: "🔁 Try again.",
      progress: "Progress",
      lives: "Lives",
    }
  };
  return texts[window.CodeLingua.lang][key] || key;
};

// ===============================
// CodeLingua - Actividad de Inglés Técnico
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Iniciando actividad de inglés...");

  const unitId = "unit1_eng";
  const unit = window.CodeLingua.getUnitConfig(unitId);
  const mentorName = window.CodeLingua.getMentorName(unit.mentor);

  const mentorBubble = document.getElementById("mentor-dialogue");
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");
  const progressText = document.getElementById("progress");
  const completeSection = document.getElementById("complete");

  let lives = unit.settings.lives;
  let correctCount = 0;

  // ========= INTRO =========
  function showMentorIntro() {
    mentorBubble.innerHTML = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < unit.intro.length) {
        const msg = document.createElement("div");
        msg.classList.add("mentor-bubble");
        msg.innerHTML = `<strong>${mentorName}:</strong> ${unit.intro[index]}`;
        mentorBubble.appendChild(msg);
        index++;
      } else {
        clearInterval(interval);
        console.log("✅ Introducción completada");
        window.CodeLingua.learningReady?.();
      }
    }, 2000);
  }

  // ========= INICIALIZACIÓN =========
  if (unit && mentorName) {
    showMentorIntro();
  } else {
    console.error("❌ Error: No se pudo cargar la configuración de la unidad o el mentor.");
  }
});

  // ========= VALIDACIÓN =========
  exercises.forEach((exercise) => {
    const input = exercise.querySelector("input");
    const button = exercise.querySelector(".check");
    const feedback = exercise.querySelector(".exercise-feedback");
    const correctAnswer = exercise.dataset.answer.trim().toLowerCase();
    const freeTries = parseInt(unit.settings.freeTries);
    let tries = 0;
    let answered = false;

    button.addEventListener("click", () => {
      if (answered) return;

      const userAnswer = input.value.trim().toLowerCase();
      tries++;

      if (userAnswer === correctAnswer) {
        exercise.classList.add("correct");
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "#00ff99";
        answered = true;
        correctCount++;
        updateProgress();
        if (correctCount >= exercises.length) completeUnit();
      } else {
        feedback.textContent = tries > freeTries ? "❌ Wrong answer. Try again later." : "Almost! Try again.";
        feedback.style.color = "#ff5e5e";
        if (tries > freeTries) {
          lives--;
          lifeCount.textContent = lives;
          if (lives <= 0) endGame();
        }
      }
    });
  });

  // ========= FUNCIONES =========
  function updateProgress() {
    const percent = Math.floor((correctCount / exercises.length) * 100);
    progressBar.style.width = percent + "%";
    progressText.textContent = `Progress: ${percent}%`;
  }

  function completeUnit() {
    document.getElementById("exercises").classList.add("hidden");
    completeSection.classList.remove("hidden");
    window.CodeLingua.saveCompletion?.(1, "eng");
  }

  function endGame() {
    document.getElementById("exercises").classList.add("hidden");
    mentorBubble.innerHTML = `<div class="mentor-bubble"><strong>${mentorName}:</strong> 😢 You've run out of lives. Take a break and try again in a few minutes.</div>`;
    setTimeout(() => location.reload(), window.CodeLingua.config.global.retryDelay);
  }

  // ========= INICIO =========
  lifeCount.textContent = lives;
  showMentorIntro();
});
