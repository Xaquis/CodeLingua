// ======================================================
// CodeLingua - Sistema de Progreso v2.0 (141125)
// Autor: Arlevy Sabogal & GPT-5
// ======================================================
// Funcionalidad: guardar, cargar y limpiar progreso
// ======================================================

window.CodeLingua = window.CodeLingua || {};

(() => {
  const API_BASE = "../backend/";

  // =============================================
  // 🔹 Guardar progreso
  // =============================================
  window.CodeLingua.saveProgress = async function (user, unit, progress) {
    try {
      const response = await fetch(`${API_BASE}save_progress.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, unit, progress })
      });

      const data = await response.json();
      console.log("💾 Progreso guardado:", data);
      return data.success;
    } catch (error) {
      console.error("❌ Error guardando progreso:", error);
      return false;
    }
  };

  // =============================================
  // 🔹 Cargar progreso
  // =============================================
  window.CodeLingua.loadProgress = async function (user) {
    try {
      const response = await fetch(`${API_BASE}load_progress.php?user=${encodeURIComponent(user)}`);
      const data = await response.json();

      console.log("📖 Progreso cargado:", data);
      return data.progress || {};
    } catch (error) {
      console.error("❌ Error cargando progreso:", error);
      return {};
    }
  };

  // =============================================
  // 🔹 Limpiar progreso
  // =============================================
  window.CodeLingua.clearProgress = async function (user) {
    try {
      const response = await fetch(`${API_BASE}clear_progress.php?user=${encodeURIComponent(user)}`);
      const data = await response.json();

      console.log("🧹 Progreso eliminado:", data);
      return data.success;
    } catch (error) {
      console.error("❌ Error limpiando progreso:", error);
      return false;
    }
  };

  // =============================================
  // 🔹 Sincronización automática (localStorage + backend)
  // =============================================
  window.CodeLingua.syncProgress = async function (user, unit, progress) {
    console.log(`🔄 Sincronizando progreso del usuario ${user} en ${unit}...`);
    localStorage.setItem(`cl_${user}_${unit}`, JSON.stringify(progress));
    return await window.CodeLingua.saveProgress(user, unit, progress);
  };

  // =============================================
  // 🔹 Recuperar progreso del localStorage
  // =============================================
  window.CodeLingua.getLocalProgress = function (user, unit) {
    try {
      const stored = localStorage.getItem(`cl_${user}_${unit}`);
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.warn("⚠️ Error leyendo progreso local:", err);
      return {};
    }
  };

  // =============================================
  // 🔹 Modo depuración (solo desarrolladores)
  // =============================================
  window.CodeLingua.debugProgress = function () {
    console.group("🧩 DEBUG: Progreso almacenado en localStorage");
    Object.keys(localStorage)
      .filter(k => k.startsWith("cl_"))
      .forEach(k => console.log(k, "=>", localStorage.getItem(k)));
    console.groupEnd();
  };

  console.log("✅ Módulo de progreso cargado correctamente (v2.0)");
})();
