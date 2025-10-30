// ===============================
// CodeLingua - Narrador Didáctico (Codder & Lin)
// Autor: Arlevy Sabogal (2025)
// ===============================

window.CodeLingua = window.CodeLingua || {};

/**
 * Muestra una burbuja temporal en pantalla (modo clásico)
 * Uso: window.CodeLingua.speak("Hola soy Codder!");
 */
window.CodeLingua.speak = function (text) {
  const existing = document.querySelector(".speech-bubble");
  if (existing) existing.remove();

  const bubble = document.createElement("div");
  bubble.className = "speech-bubble";
  bubble.textContent = text;

  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 3000);
};

/**
 * Presenta un diálogo progresivo dentro del bloque .mentor-dialogue
 * para dar contexto educativo antes de los ejercicios.
 */
window.addEventListener("DOMContentLoaded", () => {
  const dialogue = document.getElementById("mentor-dialogue");
  if (!dialogue) return;

  const bubbles = dialogue.querySelectorAll(".mentor-bubble");
  bubbles.forEach(bubble => {
    bubble.style.opacity = 0;
    bubble.style.transform = "translateY(5px)";
  });

  // Animar aparición progresiva
  bubbles.forEach((bubble, i) => {
    setTimeout(() => {
      bubble.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      bubble.style.opacity = 1;
      bubble.style.transform = "translateY(0)";
    }, i * 2500); // cada 2.5 segundos
  });
});

