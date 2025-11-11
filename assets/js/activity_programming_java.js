// ==========================================================
// CodeLingua - Unidad Java
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const exercises = [
    {
      question: "¿Qué palabra clave se usa para definir una clase en Java?",
      options: ["function", "class", "def"],
      answer: "class"
    },
    {
      question: "¿Cuál de los siguientes es un tipo de dato primitivo?",
      options: ["String", "boolean", "ArrayList"],
      answer: "boolean"
    },
    {
      question: "¿Cómo se escribe el método principal en Java?",
      options: [
        "main(String[] args)",
        "void start()",
        "function main()"
      ],
      answer: "main(String[] args)"
    }
  ];

  const container = document.getElementById("exercise-area");
  let score = 0;

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
        if (btn.textContent === ex.answer) {
          div.classList.add("correct");
          btn.style.background = "linear-gradient(90deg, #00ff99, #00b8ff)";
          score++;
        } else {
          div.classList.add("wrong");
          btn.style.background = "#ff5e5e";
        }
      });
    });
  });
});
