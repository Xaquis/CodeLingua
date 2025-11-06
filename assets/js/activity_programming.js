// ======================================================
// CodeLingua - Unidad 1 Programación (v2)
// Mentor: Codder 🤖
// Integración con sistema de idioma y progreso
// ======================================================

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
      complete: "Unidad completada 🎉",
    },
    en: {
      correct: "✅ Correct! Well done.",
      incorrect: "❌ Incorrect.",
      lostLife: "❌ Incorrect. You lost a life.",
      tryAgain: "🔁 Try again.",
      progress: "Progress",
      lives: "Lives",
      complete: "Unit complete 🎉",
    },
  };
  return texts[window.CodeLingua.lang][key] || key;
};

document.addEventListener("DOMContentLoaded", () => {
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const lifeCount = document.getElementById("life-count");
  const complete = document.getElementById("complete");
  const mentorBubble = document.getElementById("mentor-dialogue");

  let lives = 3;
  let correctCount = 0;

  exercises.forEach((exercise) => {
    const input = exercise.querySelector("input");
    const button = exercise.querySelector(".check");
    const feedback = exercise.querySelector(".exercise-feedback");
    const correctAnswer = exercise.dataset.answer.trim().toLowerCase();

    button.addEventListener("click", () => {
      const userAnswer = input.value.trim().toLowerCase();

      if (userAnswer === correctAnswer) {
        feedback.textContent = window.CodeLingua.t("correct");
        feedback.style.color = "#00ff99";
        correctCount++;
        updateProgress();
        mentorTalk("correct");
      } else {
        lives--;
        feedback.textContent = window.CodeLingua.t("lostLife");
        feedback.style.color = "#ff5e5e";
        lifeCount.textContent = `${window.CodeLingua.t("lives")}: ${lives}`;
        mentorTalk("incorrect");
        if (lives <= 0) endGame();
      }
    });
  });

  function updateProgress() {
    const percent = Math.floor((correctCount / exercises.length) * 100);
    progressBar.style.width = percent + "%";
    progressText.textContent = `${window.CodeLingua.t("progress")}: ${percent}%`;
    if (correctCount >= exercises.length) completeUnit();
  }

  function completeUnit() {
    document.getElementById("exercises").classList.add("hidden");
    complete.classList.remove("hidden");
    mentorTalk("complete");
  }

  function mentorTalk(type) {
    const bubble = document.createElement("div");
    bubble.classList.add("mentor-bubble");

    const messages = {
      correct: {
        es: "¡Excelente! Vas entendiendo la lógica de Java.",
        en: "Excellent! You're grasping Java logic.",
      },
      incorrect: {
        es: "Mmm... revisa la sintaxis, recuerda las mayúsculas importan.",
        en: "Hmm... check your syntax, remember Java is case-sensitive.",
      },
      complete: {
        es: "¡Unidad completada! Eres un verdadero programador en formación.",
        en: "Unit complete! You’re becoming a real programmer.",
      },
    };

    bubble.innerHTML = `<strong>Codder:</strong> ${messages[type][window.CodeLingua.lang]}`;
    mentorBubble.appendChild(bubble);
  }

  function endGame() {
    document.getElementById("exercises").classList.add("hidden");
    mentorBubble.innerHTML =
      `<div class="mentor-bubble"><strong>Codder:</strong> 😢 You ran out of lives... but every error is a new lesson. Try again!</div>`;
  }
});
