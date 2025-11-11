// ===========================================================
// CodeLingua - Módulo Python Basics (v2.1)
// Mentor: Byte 🐍
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🐍 Iniciando módulo Python...");

  const mentorBubble = document.getElementById("mentor-dialogue");
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");
  const progressText = document.getElementById("progress-text");

  let lives = 5;
  let correctCount = 0;
  const mentor = "Byte 🐍";

  const messages = [
    "Hola, soy Byte 🐍, tu mentor de Python.",
    "Python es simple, poderoso y muy usado en IA.",
    "Recuerda: la indentación (espacios) son parte del código.",
    "Las cadenas se escriben entre comillas, simples o dobles.",
    "¡Comencemos!"
  ];

  showMentorIntro();

  function showMentorIntro() {
    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        appendMentorMessage(`${mentor}: ${messages[i]}`);
        i++;
      } else clearInterval(interval);
    }, 2000);
  }

  function appendMentorMessage(text) {
    const msg = document.createElement("div");
    msg.classList.add("mentor-bubble");
    msg.innerHTML = `<strong>${text}</strong>`;
    mentorBubble.appendChild(msg);
    mentorBubble.scrollTop = mentorBubble.scrollHeight;
  }

  exercises.forEach((ex) => {
    const input = ex.querySelector("input");
    const button = ex.querySelector("button");
    const feedback = ex.querySelector(".feedback");
    const correctAnswer = ex.dataset.answer.trim().toLowerCase();

    button.addEventListener("click", () => {
      const userAnswer = input.value.trim().toLowerCase();

      if (userAnswer === correctAnswer) {
        ex.classList.add("correct");
        feedback.textContent = "✅ Correcto!";
        feedback.style.color = "#00ff99";
        correctCount++;
        appendMentorMessage(`${mentor}: Perfecto, eso imprime el resultado esperado.`);
      } else {
        lives--;
        ex.classList.add("wrong");
        feedback.textContent = "❌ Incorrecto.";
        feedback.style.color = "#ff5e5e";
        appendMentorMessage(`${mentor}: Pista — revisa la indentación o los paréntesis.`);
      }
      updateProgress();
    });
  });

  function updateProgress() {
    const total = exercises.length;
    const progress = Math.round((correctCount / total) * 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Progreso: ${progress}%`;
    lifeCount.textContent = `Vidas: ${lives}`;

    if (lives <= 0) {
      appendMentorMessage(`${mentor}: Has perdido todas las vidas. Practica un poco más y vuelve a intentarlo.`);
      disableInputs();
    }

    if (progress === 100) {
      appendMentorMessage(`${mentor}: ¡Excelente trabajo! Has completado la unidad de Python.`);
    }
  }

  function disableInputs() {
    exercises.forEach(ex => {
      ex.querySelector("input").disabled = true;
      ex.querySelector("button").disabled = true;
    });
  }
});
