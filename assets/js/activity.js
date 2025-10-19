/*
  activity.js - Lógica simplificada de Guardado de Estado y Finalización
  Guarda el progreso en localStorage y desbloquea la lógica de 'unit_complete' en progress.js.
  
  Exporta dos funciones al objeto global:
  1. saveCompletion(unitNumber, type): Guarda que una parte de la unidad (prog o eng) se completó.
  2. resetUnit(unitNumber): Elimina el progreso de una unidad.
*/

// Se expone la función al objeto global CodeLingua para su uso en los archivos HTML
window.CodeLingua = window.CodeLingua || {};

/**
 * Marca una parte de la unidad como completada y guarda el estado en localStorage.
 * @param {number} unitNumber - El número de la unidad (ej: 1).
 * @param {string} type - El tipo de actividad ('prog' o 'eng').
 */
window.CodeLingua.saveCompletion = function(unitNumber, type) {
    const key = `cl_unit${unitNumber}_${type}_completed`; // ej: cl_unit1_prog_completed
    localStorage.setItem(key, 'true');
    console.log(`✅ Progreso guardado: ${key} = true`);

    // Llama a la función que verifica si la unidad completa está terminada.
    // Esto es para que progress.js se ejecute inmediatamente si ambas partes se completaron.
    if (typeof window.CodeLingua.checkGlobalProgress === 'function') {
        window.CodeLingua.checkGlobalProgress(unitNumber);
    }
};

/**
 * Reinicia completamente el progreso de una unidad específica.
 * @param {number} unitNumber - El número de la unidad (ej: 1).
 */
window.CodeLingua.resetUnit = function(unitNumber) {
    const progKey = `cl_unit${unitNumber}_prog_completed`;
    const engKey  = `cl_unit${unitNumber}_eng_completed`;
    const globalKey = `cl_unit${unitNumber}_global_completed`;

    localStorage.removeItem(progKey);
    localStorage.removeItem(engKey);
    localStorage.removeItem(globalKey);
    console.log(`🗑️ Unidad ${unitNumber} reiniciada.`);
};