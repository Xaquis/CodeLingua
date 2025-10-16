// CodeLingua v1.0 - Interactividad básica

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", e => {
    if (btn.classList.contains("correct")) {
      alert("✅ Correct! Well done!");
    } else {
      alert("❌ Try again!");
    }
  });
});
