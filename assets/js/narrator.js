// ===============================
// CodeLingua - Narrador Inteligente (v2)
// Integración con VoiceManager.js
// ===============================

window.CodeLingua = window.CodeLingua || {};

document.addEventListener("DOMContentLoaded", () => {
  const dialogueBox = document.getElementById("mentor-dialogue");
  if (!dialogueBox) return;

  // === Personajes base ===
  const lin = {
    name: "Lin",
    accent: "en-GB", // Identidad británica
    style: "british",
    color: "#00B8FF",
    voiceIndex: 1
  };

  const codder = {
    name: "Codder",
    accent: "en-US",
    style: "neutral",
    color: "#00FF99",
    voiceIndex: 0
  };

  // === Contexto dinámico según la unidad ===
  const isProgramming = location.href.includes("programming");
  const mentor = isProgramming ? codder : lin;

  // === Control narrativo ===
  const narrator = {
    log: [],
    add(message, speaker = mentor.name) {
      const bubble = document.createElement("div");
      bubble.className = "mentor-bubble";
      bubble.innerHTML = `<strong>${speaker}:</strong> ${message}`;
      dialogueBox.appendChild(bubble);
      dialogueBox.scrollTop = dialogueBox.scrollHeight;

      this.log.push({ speaker, message });

      // 🔊 Reproduce voz automática
      window.CodeLingua.voice?.speak(message, mentor.accent);
    },
    clear() {
      dialogueBox.innerHTML = "";
    }
  };

  window.CodeLingua.narrator = narrator;

  // === Mensaje inicial según contexto ===
  if (isProgramming) {
    narrator.add(
      "Welcome to Unit 1: Fundamentals of Programming. Let's explore how Java became one of the most powerful languages in the digital era."
    );
  } else {
    narrator.add(
      "Hello! I'm Lin, your technical English mentor. Let's practice understanding and applying English in the world of technology."
    );
  }

  console.log(`🎙️ Narrator loaded (${mentor.name}, ${mentor.accent})`);
});
