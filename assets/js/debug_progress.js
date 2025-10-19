// ===============================
// CodeLingua - Panel de Progreso / Debug
// ===============================

(function() {
  // ✅ Solo mostrar si el modo desarrollador está activo
  const isDev = localStorage.getItem("devMode") === "true";

  if (!isDev) return; // ⛔ No muestra el panel si no está activado

  // Crear el panel flotante
  const panel = document.createElement('div');
  panel.id = 'debug-panel';
  panel.style.position = 'fixed';
  panel.style.bottom = '10px';
  panel.style.right = '10px';
  panel.style.background = 'rgba(0,0,0,0.85)';
  panel.style.color = '#00FFC6';
  panel.style.padding = '10px 15px';
  panel.style.borderRadius = '8px';
  panel.style.fontSize = '13px';
  panel.style.zIndex = '9999';
  panel.style.fontFamily = 'monospace';
  panel.style.boxShadow = '0 0 10px rgba(0,255,200,0.3)';
  panel.style.cursor = 'pointer';
  panel.title = "Haz clic para actualizar datos";

  function updatePanel() {
    const keys = Object.keys(localStorage);
    let html = `<b>📊 Progreso CodeLingua</b><br>`;
    if (keys.length === 0) {
      html += "<i>Sin datos almacenados</i>";
    } else {
      keys.forEach(k => {
        html += `${k}: <span style='color:#FFF'>${localStorage.getItem(k)}</span><br>`;
      });
    }
    html += `<hr><button id='clearStorage' style='background:#00FFC6;color:#000;border:none;padding:4px 6px;border-radius:4px;'>🧹 Limpiar</button>`;
    panel.innerHTML = html;

    document.getElementById('clearStorage').onclick = () => {
      if (confirm("¿Borrar todos los datos de progreso?")) {
        localStorage.clear();
        updatePanel();
      }
    };
  }

  panel.addEventListener('click', updatePanel);
  document.body.appendChild(panel);
  updatePanel();
})();
