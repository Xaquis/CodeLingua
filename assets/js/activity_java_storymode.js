// ============================================================
// CodeLingua - Activity Java Story Mode v2.0 (14/11/25)
// Autor: Arlevy Sabogal
// Sistema unificado: narrativa + preguntas + progreso
// ============================================================

window.CodeLingua = window.CodeLingua || {};

// ===============================
// Sistema de idioma automático
// ===============================
window.CodeLingua.lang = localStorage.getItem("cl_lang") || navigator.language.startsWith("en") ? "en" : "es";

window.CodeLingua.t = function (key) {
  const texts = {
    es: {
      introTitle: "Historia: El Nacimiento de Java ☕",
      start: "Comenzar historia",
      next: "Siguiente",
      finish: "Finalizar unidad",
      question: "Pregunta",
      correct: "✅ ¡Correcto!",
      incorrect: "❌ Incorrecto, intenta de nuevo.",
      mentorIntro: "Hola, soy Lin 🇬🇧. Hoy exploraremos cómo Java cambió el mundo del software.",
      story1: "Era el año 1995. Un grupo de ingenieros de Sun Microsystems quería crear un lenguaje para televisores inteligentes.",
      story2: "El lenguaje se llamó inicialmente Oak 🌳, pero pronto lo renombraron como Java ☕.",
      story3: "Su filosofía: 'Write Once, Run Anywhere' — escribe una vez, ejecútalo en cualquier lugar.",
      story4: "Para lograr esto, Java se basa en la Máquina Virtual de Java (JVM), que traduce el código en tiempo real.",
      story5: "Java introdujo también la Programación Orientada a Objetos (POO), una forma de estructurar el código como 'clases' y 'objetos'.",
      question1: "¿Qué empresa creó Java?",
      question2: "¿Cuál era el nombre original de Java?",
      question3: "¿Qué significa la frase 'Write Once, Run Anywhere'?",
      done: "🎉 ¡Excelente! Has completado la unidad 1 del Modo Historia Java."
    },
    en: {
      introTitle: "Story: The Birth of Java ☕",
      start: "Start Story",
      next: "Next",
      finish: "Finish Unit",
      question: "Question",
      correct: "✅ Correct!",
      incorrect: "❌ Incorrect, try again.",
      mentorIntro: "Hello! I'm Lin 🇬🇧. Today we'll explore how Java changed the software world.",
      story1: "It was 1995. A group of Sun Microsystems engineers wanted to create a language for smart TVs.",
      story2: "The language was first called Oak 🌳, but soon renamed Java ☕.",
      story3: "Its philosophy: 'Write Once, Run Anywhere'.",
      story4: "To achieve this, Java runs on the Java Virtual Machine (JVM), which translates code at runtime.",
      story5: "Java also introduced Object-Oriented Programming (OOP), a way to organize code using 'classes' and 'objects'.",
      question1: "Which company created Java?",
      question2: "What was Java's original name?",
      question3: "What does 'Write Once, Run Anywhere' mean?",
      done: "🎉 Excellent! You've completed Unit 1 of Java Story Mode."
    }
  };
  return texts[window.CodeLingua.lang][key] || key;
};

// ===============================
// Lógica principal
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Iniciando Modo Historia Java...");

  const storyContainer = document.getElementById("story-area");
  const nextBtn = document.getElementById("next-btn");

  const lang = window.CodeLingua.lang;
  const t = window.CodeLingua.t;
  const progressKey = "cl_java_story_u1";

  const story = [
    t("story1"),
    t("story2"),
    t("story3"),
    t("story4"),
    t("story5"),
  ];

  const questions = [
    { q: t("question1"), a: ["sun microsystems", "sun"] },
    { q: t("question2"), a: ["oak"] },
    { q: t("question3"), a: ["write once run anywhere", "portability"] },
  ];

  let index = 0;
  let phase = "story";

  // ======== Función: mostrar texto ========
  function showText(text) {
    storyContainer.innerHTML = `
      <h2>${t("introTitle")}</h2>
      <p>${text}</p>
      <button id="next-btn" class="btn">${t("next")}</button>
    `;
    document.getElementById("next-btn").addEventListener("click", nextStep);
  }

  // ======== Función: mostrar pregunta ========
  function showQuestion(i) {
    storyContainer.innerHTML = `
      <h2>${t("question")} ${i + 1}</h2>
      <p>${questions[i].q}</p>
      <input type="text" id="answer" placeholder="✏️ Tu respuesta...">
      <button id="check-btn" class="btn">Verificar</button>
      <div id="feedback"></div>
    `;
    document.getElementById("check-btn").addEventListener("click", () => {
      const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
      const validAnswers = questions[i].a.map(a => a.toLowerCase());

      if (validAnswers.includes(userAnswer)) {
        document.getElementById("feedback").textContent = t("correct");
        setTimeout(nextStep, 1500);
      } else {
        document.getElementById("feedback").textContent = t("incorrect");
      }
    });
  }

  // ======== Flujo narrativo ========
  function nextStep() {
    if (phase === "story") {
      if (index < story.length) {
        showText(story[index]);
        index++;
      } else {
        phase = "quiz";
        index = 0;
        showQuestion(index);
      }
    } else if (phase === "quiz") {
      if (index < questions.length - 1) {
        index++;
        showQuestion(index);
      } else {
        completeStory();
      }
    }
  }

  // ======== Completar unidad ========
  function completeStory() {
    localStorage.setItem(progressKey, "completed");
    storyContainer.innerHTML = `
      <h2>${t("done")}</h2>
      <button id="restart-btn" class="btn">${t("finish")}</button>
    `;
    document.getElementById("restart-btn").addEventListener("click", () => location.reload());
  }

  // ======== Inicio ========
  storyContainer.innerHTML = `
    <h2>${t("introTitle")}</h2>
    <p>${t("mentorIntro")}</p>
    <button id="start-btn" class="btn">${t("start")}</button>
  `;

  document.getElementById("start-btn").addEventListener("click", nextStep);
});
