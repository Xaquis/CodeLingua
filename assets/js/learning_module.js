// ===============================
// CodeLingua - Learning Module (Didáctico)
// ===============================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const mentorBox = document.getElementById("mentor-dialogue");
  if (!mentorBox) return;

  // Secuencia de mensajes didácticos
  const messages = [
    { from: "Codder", text: "Hola 👋 Soy Codder. Hoy aprenderás los fundamentos de la programación." },
    { from: "Codder", text: "Imagina que una variable es como una caja 🧱 donde puedes guardar valores." },
    { from: "Codder", text: "Los condicionales (if) son como tomar decisiones: 'si llueve, usa paraguas ☔'." },
    { from: "Codder", text: "Y los bucles repiten tareas, como practicar hasta que domines algo 🔁" },
    { from: "Codder", text: "¿Listo para ponerlo a prueba? 🚀" },
  ];

  let index = 0;

  function showMessage() {
    if (index < messages.length) {
      const msg = messages[index];
      const bubble = document.createElement("div");
      bubble.classList.add("mentor-bubble");
      bubble.innerHTML = `<strong>${msg.from}:</strong> ${msg.text}`;
      mentorBox.appendChild(bubble);
      mentorBox.scrollTop = mentorBox.scrollHeight;
      index++;
      setTimeout(showMessage, 2500);
    } else {
      // Cuando termina la enseñanza, desbloqueamos ejercicios
      if (window.CodeLingua.learningReady) {
        window.CodeLingua.learningReady();
      } else {
        const exSection = document.getElementById("exercises");
        if (exSection) exSection.classList.remove("hidden");
      }
    }
  }

  // Iniciar la secuencia
  showMessage();
});
