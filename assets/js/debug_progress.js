// assets/js/debug_progress.js
(function () {
  if (localStorage.getItem("devMode") !== "true") return;

  const panel = document.createElement("div");
  panel.id = "debug-panel";
  panel.style = "position:fixed;bottom:10px;right:10px;background:rgba(0,0,0,0.85);color:#00FFC6;padding:10px;border-radius:8px;z-index:9999;font-family:monospace;";

  function updatePanel() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith("cl_"));
    let html = "<b>📊 Progreso (cl_)</b><br>";
    if (keys.length === 0) html += "<i>Sin datos</i>";
    else keys.forEach(k => { html += `${k}: <span style="color:#fff">${localStorage.getItem(k)}</span><br>`; });
    html += '<hr><button id="clearCl">🧹 Limpiar solo cl_</button>';
    panel.innerHTML = html;
    const btn = document.getElementById("clearCl");
    if (btn) btn.onclick = () => {
      if (!confirm("Borrar todas las claves de CodeLingua (cl_*)?")) return;
      keys.forEach(k => localStorage.removeItem(k));
      updatePanel();
    };
  }

  panel.addEventListener("click", updatePanel);
  document.body.appendChild(panel);
  updatePanel();
})();
