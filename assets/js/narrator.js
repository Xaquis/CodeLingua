// ===============================
// CodeLingua - Narrador (Codder & Lin)
// ===============================

window.CodeLingua = window.CodeLingua || {};

window.CodeLingua.speak = function (text) {
  const existing = document.querySelector(".speech-bubble");
  if (existing) existing.remove();

  const bubble = document.createElement("div");
  bubble.className = "speech-bubble";
  bubble.textContent = text;

  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 3000);
};
