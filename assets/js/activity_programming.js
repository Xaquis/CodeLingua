// ======================================================
// CodeLingua - Unidad 1 Programación (v2.0 - 141125)
// Integrado con learning_module.js + unit_config.js
// Mentor: Codder 🤖
// ======================================================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 CodeLingua - Módulo de Programación iniciado");

  const unitId = "unit1_prog";
  const unit = window.CodeLingua.getUnitConfig(unitId);
  const mentorName = window.CodeLingua.getMentorName(unit.mentor || "codder");

  const mentorBubble = document.getElementById("mentor-dialogue");
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");
  const progressText = document.getElementById("progress");
  const completeSection = document.getElementById("complete");
  const exercisesSection = document.getElementById("exercises");

  let lives = unit.settings.lives;
  let correctCount = 0;

  // ===============================
  // 🎓 INTRODUCCIÓN DEL MENTOR
  // ===============================
  function showMentorIntro() {
    if (!mentorBubble) return;
    mentorBubble.innerHTML = "";
    let i = 0;

    const intro = window.CodeLingua.lang === "es" ? unit.intro.es : unit.intro.en;
    const interval = setInterval(() => {
      if (i < intro.length) {
        const msg = document.createElement("div");
        msg.classList.add("mentor-bubble");
        msg.innerHTML = `<strong>${mentorName}:</strong> ${intro[i]}`;
        mentorBubble.appendChild(msg);
        i++;
      } else {
        clearInterval(interval);
        exercisesSection.classList.remove("hidden");
      }
    }, 2000);
  }

  // ===============================
  // 🎮 LÓGICA DE EJERCICIOS
  // ===============================
  exercises.forEach((exercise) => {
    const input = exercise.querySelector("input");
    const button = exercise.querySelector(".check");
    const feedback = exercise.querySelector(".exercise-feedback");
    const correctAnswer = exercise.dataset.answer.trim().toLowerCase();
    const freeTries = parseInt(exercise.dataset.freeTries || 1);
    let tries = 0;
    let answered = false;

    button.addEventListener("click", () => {
      if (answered) return;
      const userAnswer = input.value.trim().toLowerCase();
      tries++;

      if (userAnswer === correctAnswer) {
        exercise.classList.remove("wrong");
        exercise.classList.add("correct");
        feedback.textContent = window.CodeLingua.t("correct");
        feedback.style.color = "#00ff99";
        answered = true;
        correctCount++;
        updateProgress();
        if (correctCount >= exercises.length) completeUnit();
      } else {
        exercise.classList.remove("correct");
        exercise.classList.add("wrong");
        feedback.textContent =
          tries > freeTries
            ? window.CodeLingua.t("lostLife")
            : window.CodeLingua.t("tryAgain");
        feedback.style.color = "#FF5E5E";

        if (tries > freeTries) {
          lives--;
          lifeCount.textContent = lives;
          if (lives <= 0) endGame();
        }
      }
    });
  });

  // ===============================
  // 📊 ACTUALIZAR PROGRESO
  // ===============================
  function updateProgress() {
    const percent = Math.floor((correctCount / exercises.length) * 100);
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${window.CodeLingua.t("progress")}: ${percent}%`;
  }

  // ===============================
  // 🏁 FINALIZAR UNIDAD
  // ===============================
  function completeUnit() {
    exercisesSection.classList.add("hidden");
    completeSection.classList.remove("hidden");

    const msg = document.createElement("div");
    msg.classList.add("mentor-bubble");
    msg.innerHTML = `<strong>${mentorName}:</strong> ${
      window.CodeLingua.lang === "es"
        ? "Excelente trabajo 🎉 Has completado esta unidad."
        : "Excellent work 🎉 You've completed this unit."
    }`;
    mentorBubble.appendChild(msg);

    window.CodeLingua.saveCompletion?.(1, "prog");
    console.log("✅ Unidad completada");
  }

  // ===============================
  // 💀 FIN DEL JUEGO
  // ===============================
  function endGame() {
    exercisesSection.classList.add("hidden");
    const msg = document.createElement("div");
    msg.classList.add("mentor-bubble");
    msg.innerHTML = `<strong>${mentorName}:</strong> ${
      window.CodeLingua.lang === "es"
        ? "😢 Te has quedado sin vidas. Inténtalo de nuevo en 5 minutos."
        : "😢 You've run out of lives. Try again in 5 minutes."
    }`;
    mentorBubble.appendChild(msg);
    setTimeout(() => location.reload(), 300000);
  }

  // ===============================
  // 🚀 INICIAR
  // ===============================
  showMentorIntro();
});
