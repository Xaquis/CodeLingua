// ===============================
// Future - Technical English Unit 1
// Autor: Arlevy Sabogal (2025)
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const exercises = [
    {
      id: 1,
      type: "text",
      question: "The word used to store temporary information is called a _____.",
      answer: "variable",
      hint: "It starts with 'v'.",
      difficulty: "easy"
    },
    {
      id: 2,
      type: "multiple",
      question: "A block of reusable code is called a:",
      options: ["loop", "variable", "function", "object"],
      answer: "function",
      hint: "You can call it with parentheses.",
      difficulty: "easy"
    },
    {
      id: 3,
      type: "boolean",
      question: "A loop executes a block of code once. (True/False)",
      answer: "false",
      hint: "It repeats multiple times.",
      difficulty: "medium"
    },
    {
      id: 4,
      type: "multiple",
      question: "When a program has an unexpected problem, it is called a:",
      options: ["error", "bug", "exception", "alert"],
      answer: "bug",
      hint: "🐛 Think of small insects in code.",
      difficulty: "medium"
    },
    {
      id: 5,
      type: "text",
      question: "The process of converting source code into executable code is called _____.",
      answer: "compilation",
      hint: "Starts with 'c' and ends with 'tion'.",
      difficulty: "hard"
    }
  ];

  let current = 0;
  let lives = 10;
  const lifeCount = document.getElementById('life-count');
  const exerciseArea = document.getElementById('exercises');
  const completeSection = document.getElementById('complete');

  function renderExercise(ex) {
    exerciseArea.innerHTML = `
      <h2>Exercise ${ex.id} (${ex.difficulty})</h2>
      <p>${ex.question}</p>
      <div id="answer-area"></div>
      <button id="check" class="btn">Check</button>
      <button id="hint" class="btn outline hidden">Hint</button>
      <p id="feedback"></p>
    `;

    const area = document.getElementById('answer-area');
    if (ex.type === "text") {
      area.innerHTML = `<input type="text" id="answer" placeholder="Type your answer...">`;
    } else if (ex.type === "multiple") {
      area.innerHTML = ex.options.map(opt => `
        <label><input type="radio" name="answer" value="${opt}"> ${opt}</label>
      `).join('<br>');
    } else if (ex.type === "boolean") {
      area.innerHTML = `
        <label><input type="radio" name="answer" value="true"> True</label><br>
        <label><input type="radio" name="answer" value="false"> False</label>
      `;
    }

    const btnCheck = document.getElementById('check');
    const btnHint = document.getElementById('hint');
    const feedback = document.getElementById('feedback');

    btnCheck.addEventListener('click', () => {
      const userAnswer = getUserAnswer(ex.type);
      if (!userAnswer) {
        feedback.textContent = "⚠️ Please select or type an answer.";
        return;
      }

      if (userAnswer.toLowerCase() === ex.answer.toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        nextExercise();
      } else {
        lives--;
        lifeCount.textContent = lives;
        feedback.textContent = `❌ Incorrect. Lives left: ${lives}`;
        btnHint.classList.remove('hidden');
        if (lives <= 0) {
          feedback.textContent = "💀 No lives left. Restart the unit.";
          btnCheck.disabled = true;
        }
      }
    });

    btnHint.addEventListener('click', () => {
      feedback.textContent = `💡 Hint: ${ex.hint}`;
      btnHint.disabled = true;
    });
  }

  function getUserAnswer(type) {
    if (type === "text") {
      return document.getElementById('answer').value.trim();
    } else {
      const selected = document.querySelector('input[name="answer"]:checked');
      return selected ? selected.value : "";
    }
  }

  function nextExercise() {
    current++;
    if (current < exercises.length) {
      renderExercise(exercises[current]);
    } else {
      showCompletion();
    }
  }

  function showCompletion() {
    exerciseArea.classList.add('hidden');
    completeSection.classList.remove('hidden');
    window.CodeLingua?.saveCompletion(1, 'eng');
  }

  renderExercise(exercises[current]);
});
