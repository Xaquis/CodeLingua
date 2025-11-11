// ==========================================================
// CodeLingua - Unidad SQL Essentials
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const exercises = [
    {
      question: "¿Qué comando se usa para obtener datos de una tabla?",
      options: ["SELECT", "GET", "FETCH"],
      answer: "SELECT"
    },
    {
      question: "¿Qué instrucción se usa para agregar un nuevo registro?",
      options: ["ADD NEW", "INSERT INTO", "APPEND"],
      answer: "INSERT INTO"
    },
    {
      question: "¿Qué palabra clave elimina una tabla completa?",
      options: ["REMOVE TABLE", "DELETE", "DROP TABLE"],
      answer: "DROP TABLE"
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
