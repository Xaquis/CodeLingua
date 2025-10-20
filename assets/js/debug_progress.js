// ===============================
// CodeLingua - Debug Panel de Progreso
// Autor: © 2025 Arlevy Sabogal
// ===============================
//
// Descripción:
// Este script activa un panel flotante de depuración
// para visualizar en tiempo real las claves almacenadas en localStorage.
// Solo se muestra si el modo desarrollador (devMode) está habilitado.
//

(function () {
  try {
    // Verificar si está activado el modo desarrollador
    if (localStorage.getItem("devMode") !== "true") return;

    // Crear el panel principal
    const panel = document.createElement("div");
    panel.id = "debug-panel";
    Object.assign(panel.style, {
      position: "fixed",
      bottom: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.85)",
      color: "#00FFC6",
      padding: "12px",
      borderRadius: "10px",
      zIndex: "9999",
      fontFamily: "monospace",
      fontSize: "13px",
      maxWidth: "280px",
      maxHeight: "300px",
      overflowY: "auto",
      boxShadow: "0 0 8px rgba(0,255,198,0.4)",
    });

    /**
     * Refresca la información visible en el panel
     */
    function updatePanel() {
      const keys = Object.keys(localStorage);
      let html = "<b>📊 Progreso</b><br>";

      if (keys.length === 0) {
        html += "<i>Sin datos</i>";
      } else {
        // Mostrar las claves relevantes primero
        keys
          .filter(k => k.startsWith("cl_"))
          .forEach(key => {
            html += `${key}: <span style="color:#fff">${localStorage.getItem(key)}</span><br>`;
          });

        // Mostrar otras claves solo si existen
        const extras = keys.filter(k => !k.startsWith("cl_") && k !== "devMode");
        if (extras.length) {
          html += "<hr><b>🔧 Otros:</b><br>";
          extras.forEach(k => {
            html += `${k}: <span style="color:#ccc">${localStorage.getItem(k)}</span><br>`;
          });
        }
      }

      // Botón para limpiar el almacenamiento
      html += '<hr><button id="clearStorage" style="background:#00FFC6;color:#000;border:none;border-radius:6px;padding:4px 8px;cursor:pointer;">🧹 Limpiar</button>';
      panel.innerHTML = html;

      // Asociar evento al botón
      const btn = document.getElementById("clearStorage");
      if (btn) {
        btn.onclick = () => {
          if (confirm("¿Borrar todos los datos de progreso?")) {
            localStorage.clear();
            updatePanel();
          }
        };
      }
    }

    // Permitir clics en el panel para refrescar
    panel.addEventListener("click", updatePanel);

    // Insertar en el documento
    document.body.appendChild(panel);

    // Mostrar los datos iniciales
    updatePanel();
  } catch (err) {
    console.error("❌ Error en debug_progress.js:", err);
  }
})();
