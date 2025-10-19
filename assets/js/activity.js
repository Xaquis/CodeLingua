
/*
  activity.js - Shared logic for interactive units (Codder / Lin)
  Features:
  - Multiple exercises per unit (configurable)
  - 10 lives per unit, saved in localStorage
  - First exercise: 3 free attempts (no life loss for first 3 wrong tries)
  - Progress saved per unit in localStorage
  - "Complete unit" option and reset
*/

(function() {
  // Helper: query selector
  const $ = (sel, ctx=document) => ctx.querySelector(sel);

  // Initialize with data from page
  function initActivity(config) {
    const unitId = config.unitId; // e.g., "unit1_prog" or "unit1_eng"
    const exercises = config.exercises || [];
    const total = exercises.length;
    const maxLives = 10;
    const freeAttemptsForFirst = 3;

    // Storage keys (per unit)
    const keyLives = `cl_${unitId}_lives`;
    const keyProgress = `cl_${unitId}_progress`;
    const keyIndex = `cl_${unitId}_index`;
    const keyAttempts = `cl_${unitId}_attempts`;
    const keyCompleted = `cl_${unitId}_completed`;

    // UI elements
    const livesEl = $('#lives');
    const progressEl = $('#progress');
    const questionEl = $('#question');
    const codeEl = $('#code-snippet');
    const answerInput = $('#answer');
    const checkBtn = $('#check-btn');
    const nextBtn = $('#next-btn');
    const feedbackEl = $('#feedback');
    const progressBar = $('#progress-bar');
    const completeBtn = $('#complete-btn');
    const resetBtn = $('#reset-btn');
    const attemptsEl = $('#attempts-count');

    // Load state or defaults
    let lives = parseInt(localStorage.getItem(keyLives)) || maxLives;
    let progress = parseInt(localStorage.getItem(keyProgress)) || 0;
    let index = parseInt(localStorage.getItem(keyIndex)) || 0;
    let attempts = parseInt(localStorage.getItem(keyAttempts)) || 0;
    let completed = localStorage.getItem(keyCompleted) === 'true';

    function saveState() {
      localStorage.setItem(keyLives, lives);
      localStorage.setItem(keyProgress, progress);
      localStorage.setItem(keyIndex, index);
      localStorage.setItem(keyAttempts, attempts);
      localStorage.setItem(keyCompleted, completed ? 'true' : 'false');
    }

    function updateStatus() {
      livesEl.textContent = `❤️ ${lives}`;
      progressEl.textContent = `Progreso: ${progress}%`;
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (attemptsEl) attemptsEl.textContent = `Intentos (ejercicio actual): ${attempts}`;
    }

    function renderExercise() {
      const ex = exercises[index];
      if (!ex) return;
      questionEl.textContent = ex.prompt;
      codeEl.textContent = ex.snippet;
      answerInput.value = '';
      feedbackEl.textContent = '';
      attempts = 0;
      saveState();
      updateStatus();
      // Disable next until answered correctly
      nextBtn.disabled = true;
    }

    function completeUnit() {
      completed = true;
      saveState();
      feedbackEl.textContent = '🎉 ¡Unidad completada!';
      feedbackEl.style.color = '#8BC34A';
      completeBtn.disabled = false;
      nextBtn.disabled = true;
    }

    function resetUnit() {
      if (!confirm('¿Deseas reiniciar esta unidad? Se borrará el progreso local.')) return;
      lives = maxLives;
      progress = 0;
      index = 0;
      attempts = 0;
      completed = false;
      saveState();
      renderExercise();
      updateStatus();
      completeBtn.disabled = true;
      feedbackEl.textContent = 'Unidad reiniciada.';
      feedbackEl.style.color = '#00B8FF';
    }

    checkBtn.addEventListener('click', () => {
      const ex = exercises[index];
      const user = answerInput.value.trim().toLowerCase();
      attempts++;
      // Determine free attempts rule: applies only if index===0
      const freeAttempts = (index === 0) ? freeAttemptsForFirst : 0;
      const correct = ex.answers.some(a => a.toLowerCase() === user);
      if (correct) {
        feedbackEl.textContent = '✅ ¡Correcto!';
        feedbackEl.style.color = '#8BC34A';
        // award progress portion
        const per = Math.round(100 / total);
        progress = Math.min(100, progress + per);
        nextBtn.disabled = false;
        if (index === total - 1 || progress >= 100) {
          completeUnit();
        }
      } else {
        if (attempts <= freeAttempts) {
          feedbackEl.textContent = `⚠️ Incorrecto — intento ${attempts}/${freeAttempts}. No pierdes vida.`;
          feedbackEl.style.color = '#FFC107';
        } else {
          lives--;
          feedbackEl.textContent = `❌ Incorrecto. Perdiste 1 vida. Vidas restantes: ${lives}`;
          feedbackEl.style.color = '#FF5252';
          if (lives <= 0) {
            feedbackEl.textContent = '💀 Has perdido todas las vidas. Reinicia la unidad para volver a intentarlo.';
            lives = maxLives;
            progress = 0;
            index = 0;
            attempts = 0;
            completed = false;
            saveState();
            updateStatus();
            renderExercise();
            return;
          }
        }
      }
      saveState();
      updateStatus();
    });

    nextBtn.addEventListener('click', () => {
      if (index < total - 1) {
        index++;
        renderExercise();
        saveState();
      }
    });

    completeBtn.addEventListener('click', () => {
      if (confirm('Marcar unidad como completada y guardar progreso?')) {
        completeUnit();
      }
    });

    resetBtn.addEventListener('click', resetUnit);

    // Initial render
    if (completed) {
      feedbackEl.textContent = '🎉 Unidad ya completada anteriormente.';
      feedbackEl.style.color = '#8BC34A';
      completeBtn.disabled = false;
      nextBtn.disabled = true;
      if (progressBar) progressBar.style.width = `${progress}%`;
      updateStatus();
    } else {
      renderExercise();
    }
  }

  // Expose init function globally
  window.CL_initActivity = initActivity;
})();
