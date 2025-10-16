// Minimal JS for CodeLingua prototype
document.addEventListener('DOMContentLoaded', function(){
  // Quiz buttons
  document.querySelectorAll('.quiz button').forEach(btn=>{
    btn.addEventListener('click', function(){
      if(this.dataset.correct === "true"){
        alert('✅ Correcto!');
      } else {
        alert('❌ Incorrecto, inténtalo de nuevo.');
      }
    });
  });
});
/* ====== Modo claro/oscuro ====== */
.theme-toggle {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
}

.theme-toggle:hover {
  background-color: #388E3C;
}

/* Tema claro */
body.light-mode {
  background-color: #F4F4F4;
  color: #222;
}

body.light-mode header {
  background-color: #FFFFFF;
  color: #222;
}

body.light-mode section {
  background-color: #FFFFFF;
  color: #222;
}

body.light-mode a {
  color: #2E7D32;
}
