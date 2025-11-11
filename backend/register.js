// =====================================================
// CodeLingua v2.1 - Registro Simulado (sin servidor)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const message = document.getElementById("register-message");

  form?.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!name || !email || !password || !confirm) {
      showMsg("Por favor completa todos los campos.", "error");
      return;
    }

    if (password !== confirm) {
      showMsg("Las contraseñas no coinciden.", "error");
      return;
    }

    // Guardar usuario en localStorage
    const users = JSON.parse(localStorage.getItem("cl_users") || "[]");
    if (users.find(u => u.email === email)) {
      showMsg("Ya existe una cuenta con este correo.", "error");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("cl_users", JSON.stringify(users));

    showMsg("✅ Registro exitoso. Ahora puedes iniciar sesión.", "success");
    form.reset();
  });

  function showMsg(text, type) {
    message.textContent = text;
    message.style.color = type === "error" ? "#ff5e5e" : "#00ff99";
  }
});
