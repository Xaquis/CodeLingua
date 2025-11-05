// ======================================================
// CodeLingua v2.0 (141125)
// Sistema de Progreso y Vidas
// ======================================================

window.CodeLingua = window.CodeLingua || {};

// ============================
// 🧠 CONFIGURACIÓN GENERAL
// ============================

window.CodeLingua.Progress = {
  dataKeyPrefix: "cl_progress_",
  lifeKeyPrefix: "cl_lives_",
  maxLives: 5,

  // Recuperar progreso guardado
  get(unitId) {
    const data = localStorage.getItem(this.dataKeyPrefix + unitId);
    return data ? JSON.parse(data) : { completed: 0, total: 0 };
  },

  // Guardar progreso actual
  save(unitId, completed, total) {
    const data = { completed, total };
    localStorage.setItem(this.dataKeyPrefix + unitId, JSON.stringify(data));
    console.log(`📘 Progreso guardado (${unitId}): ${completed}/${total}`);
  },

  // Obtener número de vidas disponibles
  getLives(unitId) {
    const lives = localStorage.getItem(this.lifeKeyPrefix + unitId);
    return lives ? parseInt(lives, 10) : this.maxLives;
  },

  // Restar una vida
  loseLife(unitId) {
    let lives = this.getLives(unitId);
    lives = Math.max(lives - 1, 0);
    localStorage.setItem(this.lifeKeyPrefix + unitId, lives);
    console.warn(`💀 Vida perdida. Restan ${lives}`);
    return lives;
  },

  // Restaurar vidas completas
  resetLives(unitId) {
    localStorage.setItem(this.lifeKeyPrefix + unitId, this.maxLives);
    console.log(`❤️ Vidas restauradas (${unitId}): ${this.maxLives}`);
    return this.maxLives;
  },

  // Calcular porcentaje de avance
  getProgressPercent(unitId) {
    const { completed, total } = this.get(unitId);
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  },

  // Limpiar progreso solo de CodeLingua
  clearAll() {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("cl_")) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    console.log("🧹 Progreso CodeLingua limpiado completamente");
  }
};

// ============================
// ⚙️ ACTUALIZACIÓN VISUAL
// ============================

window.CodeLingua.updateProgressUI = function (unitId) {
  const progress = this.Progress.getProgressPercent(unitId);
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress");
  const lifeCount = document.getElementById("life-count");

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  if (progressText) {
    const lang = this.lang || "es";
    progressText.textContent =
      lang === "es"
        ? `Progreso: ${progress}% completado`
        : `Progress: ${progress}% completed`;
  }

  if (lifeCount) {
    const lives = this.Progress.getLives(unitId);
    lifeCount.textContent =
      (this.lang === "es" ? "Vidas: " : "Lives: ") + lives;
  }
};

// ============================
// 🚀 EVENTO AUTOMÁTICO
// ============================

document.addEventListener("DOMContentLoaded", () => {
  console.log("🎯 Sistema de progreso activo");

  // Actualizar automáticamente si hay ID de unidad global
  if (window.CodeLingua.currentUnitId) {
    window.CodeLingua.updateProgressUI(window.CodeLingua.currentUnitId);
  }
});
