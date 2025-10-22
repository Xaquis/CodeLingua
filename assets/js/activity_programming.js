// ===============================
// CodeLingua - Programación Unidad 1
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const exercises = [
    { q: "1️⃣ En programación, una _____ se usa para almacenar datos.", options: ["función", "variable", "bucle", "boolean"], answer: "variable" },
    { q: "2️⃣ La palabra clave usada para condiciones es:", options: ["if", "loop", "return", "case"], answer: "if" },
    { q: "3️⃣ Una estructura que repite código varias veces se llama:", options: ["loop", "var", "array", "switch"], answer: "loop" },
    { q: "4️⃣ Un conjunto de instrucciones agrupadas se llama:", options: ["método", "función", "dato", "objeto"], answer: "función" },
    { q: "5️⃣ Un valor que puede ser verdadero o falso es:", options: ["cadena", "boolean", "entero", "condición"], answer: "boolean" }
  ];

  let current = 0;
  let correct = 0;
  let lives = 10;
  let freeTries = 3;

  const lifeEl = document.getElementById("life-count");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const exercisesEl = document.getElementById("exercises");
  const feedback = document.getElementById("feedback");
  const completeSection = document.getElementById("complete");

  function loadExercise() {
    if (current >= exercises.length) {
      completeSection.classList.remove("hidden");
      exercisesEl.innerHTML = "";
      feedback.textContent = "";
      window.CodeLingua.saveCompletion(1, "prog");
      return;
    }

    const ex = exercises[current];
    exercisesEl.innerHTML = `
      <div class="exercise">
        <p>${ex.q}</p>
        ${ex.options.map(opt => `<button class="option">${opt}</button>`).join("")}
      </div>
    `;

    document.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => checkAnswer(btn.textContent));
    });
  }

  function checkAnswer(selected) {
    const ex = exercises[current];
    if (selected.toLowerCase() === ex.answer.toLowerCase()) {
      correct++;
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "#00FFC6";
      progressBar.style.width = `${(correct / exercises.length) * 100}%`;
      progressText.textContent = `Progreso: ${Math.round((correct / exercises.length) * 100)}%`;
      window.CodeLingua.speak("¡Bien hecho!");
    } else {
      lives--;
      lifeEl.textContent = lives;
      feedback.textContent = `❌ Incorrecto. La respuesta era "${ex.answer}".`;
      feedback.style.color = "#FF5E5E";
      window.CodeLingua.speak("Sigue intentando.");
      if (lives <= 0) {
        alert("😢 Te has quedado sin vidas. Vuelve a intentarlo en 5 minutos.");
        return;
      }
    }
    current++;
    setTimeout(loadExercise, 1500);
  }

  loadExercise();
});
