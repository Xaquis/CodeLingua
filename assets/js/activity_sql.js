// ===========================================================
// CodeLingua - Módulo SQL Fundamentals (v2.1)
// Mentor: Ada 🧮
// ===========================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Iniciando módulo SQL...");

  const mentorBubble = document.getElementById("mentor-dialogue");
  const exercises = document.querySelectorAll(".exercise");
  const progressBar = document.getElementById("progress-bar");
  const lifeCount = document.getElementById("life-count");
  const progressText = document.getElementById("progress-text");

  let lives = 5;
  let correctCount = 0;
  const mentor = "Ada 🧮";

  const messages = [
    "Hola, soy Ada 🧮, tu mentora de bases de datos.",
    "SQL significa Structured Query Language — el lenguaje de las consultas.",
    "Comenzaremos aprendiendo SELECT, WHERE y ORDER BY.",
    "Recuerda: cada consulta termina con punto y coma (;).",
    "¡Vamos a practicar!"
  ];

  // ====== Intro ======
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

  // ====== Mostrar mensajes sin borrar ======
  function appendMentorMessage(text) {
    const msg = document.createElement("div");
    msg.classList.add("mentor-bubble");
    msg.innerHTML = `<strong>${text}</strong>`;
    mentorBubble.appendChild(msg);
    mentorBubble.scrollTop = mentorBubble.scrollHeight;
  }

  // ====== Ejercicios ======
  exercises.forEach((ex) => {
    const input = ex.querySelector("input");
    const button = ex.querySelector("button");
    const feedback = ex.querySelector(".feedback");
    const correctAnswer = ex.dataset.answer.trim().toLowerCase();

    button.addEventListener("click", () => {
      const userAnswer = input.value.trim().toLowerCase();

      if (userAnswer === correctAnswer) {
        ex.classList.add("correct");
        feedback.textContent = "✅ ¡Correcto!";
        feedback.style.color = "#00ff99";
        correctCount++;
        appendMentorMessage(`${mentor}: Bien hecho, esa consulta devolverá los resultados correctos.`);
      } else {
        lives--;
        ex.classList.add("wrong");
        feedback.textContent = "❌ Incorrecto.";
        feedback.style.color = "#ff5e5e";
        appendMentorMessage(`${mentor}: Pista — verifica las mayúsculas, comillas o el uso de punto y coma.`);
      }
      updateProgress();
    });
  });

  // ====== Progreso ======
  function updateProgress() {
    const total = exercises.length;
    const progress = Math.round((correctCount / total) * 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Progreso: ${progress}%`;
    lifeCount.textContent = `Vidas: ${lives}`;

    if (lives <= 0) {
      appendMentorMessage(`${mentor}: Te quedaste sin vidas. Repasa los comandos y vuelve a intentarlo.`);
      disableInputs();
    }

    if (progress === 100) {
      appendMentorMessage(`${mentor}: ¡Excelente! Has completado la unidad SQL.`);
    }
  }

  function disableInputs() {
    exercises.forEach(ex => {
      ex.querySelector("input").disabled = true;
      ex.querySelector("button").disabled = true;
    });
  }
});
