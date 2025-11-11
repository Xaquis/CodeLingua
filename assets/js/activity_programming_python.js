// ==========================================================
// CodeLingua - Unidad Python Basics
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const exercises = [
    {
      question: "¿Qué palabra clave define una función en Python?",
      options: ["func", "def", "function"],
      answer: "def"
    },
    {
      question: "¿Cuál de las siguientes estructuras se usa para un bucle?",
      options: ["repeat", "loop", "for"],
      answer: "for"
    },
    {
      question: "¿Qué imprime este código? print(2 + 3 * 4)",
      options: ["20", "14", "24"],
      answer: "14"
    }
  ];

  const container = document.getElementById("exercise-area");

  exercises.forEach((ex, i) => {
    const div = document.createElement("div");
    div.classList.add("exercise");
    div.innerHTML = `
      <p><strong>Ejercicio ${i + 1}:</strong> ${ex.question}</p>
      ${ex.options.map(opt => `<button class="btn">${opt}</button>`).join("")}
    `;
    container.appendChild(div);

    const buttons = div.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => (b.disabled = true));
        if (btn.textContent === ex.answer) {
          btn.style.background = "linear-gradient(90deg, #00ff99, #00b8ff)";
        } else {
          btn.style.background = "#ff5e5e";
        }
      });
    });
  });
});
