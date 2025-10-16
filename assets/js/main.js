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
