# Día 7 — Desarrollo Interactivo en CodeLingua

## 🎯 Objetivo del día
Implementar la interacción avanzada del sistema de aprendizaje con retroalimentación dinámica, barra de progreso visible y gestión de vidas.

---

## 🧩 Nuevas características

1. **Sistema de preguntas con opciones seleccionables**
   - Se reemplazaron los campos de texto por botones o listas de selección.
   - Cada pregunta puede tener varias opciones, pero solo una correcta.
   - Al seleccionar una respuesta:
     - Si es correcta → aparece mensaje positivo y se suma progreso.
     - Si es incorrecta → se muestra la respuesta correcta y se pierde una vida.

2. **Barra de progreso interactiva**
   - Incrementa visualmente con cada respuesta correcta.
   - Llega al 100% al completar 5 aciertos, activando el botón “Continuar”.

3. **Gestión de vidas**
   - 10 vidas por sesión.
   - Cada error resta 1 vida.
   - Si las vidas llegan a 0, el usuario debe esperar 5 minutos para regenerarlas.

4. **Animaciones y diseño Future**
   - Efectos de iluminación, hover, y transiciones suaves.
   - Total compatibilidad con modo claro y oscuro.

---

## ⚙️ Código modificado
- `assets/js/activity_programming.js`
- `assets/js/activity_english.js`
- `assets/css/style.css`

---

## ✅ Resultados
- Interfaz intuitiva y fluida.
- Retroalimentación inmediata.
- Mayor retención del usuario gracias al refuerzo visual.
- Fundamentos sentados para incluir el modo de usuario y puntajes.

---

## 🧠 Retrospectiva del día
**Logros:**
- Se completó la lógica base del sistema de ejercicios adaptativos.
- La interfaz ahora refleja correctamente el tema Future.
- La experiencia de usuario es coherente y funcional.

**Pendientes para el Día 8:**
- Mejorar la dificultad progresiva.
- Implementar mensajes de ayuda o pistas.
- Validar la persistencia del progreso en localStorage.
