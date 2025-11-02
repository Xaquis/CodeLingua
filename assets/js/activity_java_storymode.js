// ===============================
// CodeLingua - Modo Didáctico Java (Story Mode)
// ===============================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("🚀 Iniciando modo didáctico de Java...");

  const storyArea = document.getElementById("story-area");
  const title = document.getElementById("story-title");
  const text = document.getElementById("story-text");
  const code = document.getElementById("story-code");
  const questionBox = document.getElementById("story-question");
  const nextBtn = document.getElementById("next-btn");
  const complete = document.getElementById("complete");

  let currentStep = 0;
  let storyData = [];

  // === Cargar historia desde JSON ===
  try {
    const response = await fetch("../assets/data/unit_java_story.json");
    storyData = await response.json();
    console.log("✅ Historia cargada correctamente.");
    renderStep();
  } catch (error) {
    console.error("❌ Error al cargar la historia:", error);
  }

  // === Renderizar paso actual ===
  function renderStep() {
    const step = storyData[currentStep];
    if (!step) {
      storyArea.classList.add("hidden");
      complete.classList.remove("hidden");
      window.CodeLingua.saveCompletion?.(1, "java");
      return;
    }

    title.textContent = `Lección ${currentStep + 1}: ${step.title}`;
    text.textContent = step.text;
    code.textContent = step.code || "";
    questionBox.innerHTML = "";

    if (step.question) {
      const q = document.createElement("p");
      q.textContent = step.question.text;

      const options = step.question.options.map(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "btn option-btn";
        btn.onclick = () => validateAnswer(opt, step.question.answer);
        return btn;
      });

      questionBox.appendChild(q);
      options.forEach(btn => questionBox.appendChild(btn));
    }
  }

  // === Validar respuesta ===
  function validateAnswer(selected, correct) {
    const fb = document.createElement("p");
    fb.style.marginTop = "10px";
    fb.style.fontWeight = "bold";

    if (selected === correct) {
      fb.textContent = "✅ ¡Correcto! Avancemos...";
      fb.style.color = "#00ff99";
      nextBtn.disabled = false;
    } else {
      fb.textContent = "❌ No exactamente... Intenta de nuevo.";
      fb.style.color = "#ff6666";
    }

    questionBox.appendChild(fb);
  }

  // === Botón siguiente ===
  nextBtn.addEventListener("click", () => {
    currentStep++;
    nextBtn.disabled = true;
    renderStep();
  });
});
