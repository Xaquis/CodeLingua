// ===============================
// CodeLingua - Inglés Técnico Unidad 1
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const exercises = [
    { q: "1️⃣ Traduce al inglés: “Variable”.", options: ["Variable", "Loop", "Condition", "Data"], answer: "Variable" },
    { q: "2️⃣ ¿Cómo se dice 'bucle' o 'ciclo' en inglés?", options: ["Loop", "Function", "While", "Case"], answer: "Loop" },
    { q: "3️⃣ ¿Qué palabra describe un conjunto de instrucciones reutilizables?", options: ["Function", "Array", "Code", "Class"], answer: "Function" },
    { q: "4️⃣ ¿Qué tipo de dato puede ser solo verdadero o falso?", options: ["Boolean", "String", "Integer", "Object"], answer: "Boolean" },
    { q: "5️⃣ ¿Qué palabra se usa para condiciones?", options: ["If", "Else", "Check", "Compare"], answer: "If" }
  ];

  let current = 0;
  let correct = 0;
  let lives = 10;

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
      window.CodeLingua.saveCompletion(1, "eng");
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
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "#00FFC6";
      progressBar.style.width = `${(correct / exercises.length) * 100}%`;
      progressText.textContent = `Progress: ${Math.round((correct / exercises.length) * 100)}%`;
      window.CodeLingua.speak("Great job!");
    } else {
      lives--;
      lifeEl.textContent = lives;
      feedback.textContent = `❌ Incorrect. The correct answer was "${ex.answer}".`;
      feedback.style.color = "#FF5E5E";
      window.CodeLingua.speak("Try again!");
      if (lives <= 0) {
        alert("💀 You've run out of lives. Try again later!");
        return;
      }
    }
    current++;
    setTimeout(loadExercise, 1500);
  }

  loadExercise();
});
