/*
  progress.js — CodeLingua
  © 2025 Arlevy Sabogal — Todos los derechos reservados.

  Función: Verificar si las unidades de programación e inglés están completas.
  Si ambas lo están, marca la unidad global como completada
  y maneja la redirección a la siguiente unidad.
*/

(function () {
  // Crear el espacio global para funciones compartidas
  window.CodeLingua = window.CodeLingua || {};
  window.CodeLingua.checkGlobalProgress = checkGlobalProgress;

  // Ejecutar automáticamente si estamos en unit_complete.html
  if (window.location.pathname.includes("unit_complete.html")) {
    const params = new URLSearchParams(window.location.search);
    const unitNumber = parseInt(params.get("unit"));
    if (!isNaN(unitNumber)) {
      checkGlobalProgress(unitNumber);
    }
  }

  /**
   * Verifica el progreso global de la unidad actual
   * @param {number} unitNumber - Número de la unidad actual
   */
  function checkGlobalProgress(unitNumber) {
    try {
      if (!unitNumber) {
        // Intentar obtener el número de unidad desde el body (por ejemplo: data-unit="unit1_prog")
        const body = document.querySelector("body");
        const unitId = body ? body.dataset.unit : null;
        const match = unitId ? unitId.match(/unit(\d+)/) : null;
        unitNumber = match ? parseInt(match[1]) : null;
      }

      if (!unitNumber) return; // No se puede determinar la unidad, salir.

      const nextUnitNumber = unitNumber + 1;

      // Claves de progreso con prefijo cl_ (CodeLingua)
      const progKey = `cl_unit${unitNumber}_prog_completed`;
      const engKey = `cl_unit${unitNumber}_eng_completed`;
      const globalKey = `cl_unit${unitNumber}_global_completed`;

      // Leer estado actual del localStorage
      const progDone = localStorage.getItem(progKey) === "true";
      const engDone = localStorage.getItem(engKey) === "true";
      const globalDone = localStorage.getItem(globalKey) === "true";

      // Verificar si ambas rutas están completas y no se ha marcado globalmente
      if (progDone && engDone && !globalDone) {
        localStorage.setItem(globalKey, "true");
        console.log(`🏆 Unidad ${unitNumber} marcada como completada globalmente.`);

        // Si estamos en unit_complete.html, decidir siguiente acción
        if (window.location.pathname.includes("unit_complete.html")) {
          const MAX_IMPLEMENTED_UNITS = 99;

          if (nextUnitNumber <= MAX_IMPLEMENTED_UNITS) {
            // Redirigir a la siguiente unidad de programación
            window.location.href = `programming.html?unit=${nextUnitNumber}`;
          } else {
            // Si ya completó todas las unidades implementadas
            alert("🎉 ¡Felicidades! Has completado todas las unidades implementadas.");
            window.location.href = `../index.html`;
          }
        }
      }
    } catch (error) {
      console.error("❌ Error en checkGlobalProgress:", error);
    }
  }
})();
