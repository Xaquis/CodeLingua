// ======================================================
// CodeLingua - Unidad 2 Inglés Técnico
// Mentor: Lin
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  const unitId = "unit2_eng";
  const unit = window.CodeLingua.getUnitConfig(unitId);
  const mentorName = window.CodeLingua.getMentorName(unit.mentor);

  const mentorBubble = document.getElementById("mentor-dialogue");
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");

  let lives = unit.settings.lives;
  let correctCount = 0;

  // ======= INTRO =======
  function showIntro() {
    mentorBubble.innerHTML = "";
    let index = 0;
    const interval = setInterval(() => {
      if (index < unit.intro.length) {
        const msg = document.createElement("div");
        msg.classList.add("mentor-bubble");
        msg.innerHTML = `<strong>${mentorName}:</strong> ${unit.intro[index]}`;
        mentorBubble.appendChild(msg);
        index++;
      } else clearInterval(interval);
    }, 2500);
  }

  showIntro();

  // ======= EJERCICIOS =======
  exercises.forEach((ex) => {
    const input = ex.querySelector("input");
    const checkBtn = ex.querySelector(".check");

    checkBtn.addEventListener("click", () => {
      const answer = input.value.trim().toLowerCase();
      const correct = input.dataset.answer.toLowerCase();

      if (answer === correct) {
        ex.classList.add("correct");
        correctCount++;
        progressBar.style.width = `${(correctCount / exercises.length) * 100}%`;
      } else {
        ex.classList.add("wrong");
        lives--;
        lifeCount.textContent = lives;
      }

      if (lives <= 0) {
        alert("💀 You’ve lost all your lives. Try again!");
        window.location.reload();
      }

      if (correctCount === exercises.length) {
        window.CodeLingua.saveCompletion(2, "english");
        alert("🎉 Unit completed!");
      }
    });
  });
});
