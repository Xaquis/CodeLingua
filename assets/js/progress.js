/*
  progress.js — CodeLingua
  Verifica si las unidades de programación e inglés están completas.
  Si ambas lo están, marca la unidad global como completada
  y redirige al archivo genérico unit_complete.html?unit=X
*/

(function() {
  // Detectar el número de unidad actual a partir del atributo data-unit del <body>
  const body = document.querySelector('body');
  if (!body) return;

  const unitId = body.dataset.unit; // ejemplo: "unit1_prog" o "unit1_eng"
  if (!unitId) return;

  // Extraer número de unidad (por ejemplo: "1" de "unit1_prog")
  const match = unitId.match(/unit(\d+)/);
  if (!match) return;

  const unitNumber = match[1];

  // Claves de progreso individuales
  const progKey = `cl_unit${unitNumber}_prog_completed`;
  const engKey  = `cl_unit${unitNumber}_eng_completed`;
  const globalKey = `unit${unitNumber}_completed`;

  // Leer estado actual
  const progDone = localStorage.getItem(progKey) === 'true';
  const engDone  = localStorage.getItem(engKey) === 'true';
  const globalDone = localStorage.getItem(globalKey) === 'true';

  // Si ambas partes están completas y aún no se marcó globalmente
  if (progDone && engDone && !globalDone) {
    localStorage.setItem(globalKey, 'true');

    // Esperar medio segundo y redirigir al genérico de celebración
    setTimeout(() => {
      const target = `unit_complete.html?unit=${unitNumber}`;
      console.log(`✅ Unidad ${unitNumber} completada. Redirigiendo a ${target}...`);
      window.location.href = target;
    }, 500);
  }
})();

