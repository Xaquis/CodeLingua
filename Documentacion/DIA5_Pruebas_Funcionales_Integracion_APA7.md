
# 📘 Día 5 – Pruebas funcionales e integración del primer módulo interactivo
**Autor:** Arlevy Sabogal  
**Proyecto:** CodeLingua  
**Norma aplicada:** ISO/IEC 25010 — Modelo de Calidad del Software  
**Fecha:** 2025-10-18  

---

## 🔹 1. Objetivo
Realizar pruebas funcionales sobre los componentes principales de CodeLingua y comenzar la integración de los módulos interactivos (Programación e Inglés), garantizando la correcta operación de los botones de control (modo, idioma y navegación), así como la interacción básica con el usuario.

---

## 🔹 2. Fundamento teórico
Las pruebas funcionales se enfocan en verificar el cumplimiento de los requisitos definidos para cada módulo de software.  
De acuerdo con la norma **ISO/IEC 25010**, se evalúan las características de **usabilidad**, **fiabilidad** y **eficiencia** del sistema, asegurando que el comportamiento del software cumpla con las expectativas del usuario final.

---

## 🔹 3. Pruebas realizadas

| **Componente** | **Prueba** | **Resultado Esperado** | **Resultado Obtenido** | **Estado** |
|----------------|-------------|-------------------------|-------------------------|-------------|
| Botón 🌙 / ☀️  | Cambiar entre modo claro y oscuro | Interfaz cambia de paleta *Future Dark ↔ Light* | ✅ Correcto | Aprobado |
| Botón 🇪🇸 / 🇺🇸 | Cambiar idioma | Textos dinámicos en español e inglés | ✅ Correcto | Aprobado |
| Navegación entre módulos | Enlaces funcionales entre *Inicio*, *Programación*, *Inglés* y *Sobre* | ✅ Redirecciona correctamente | Aprobado |
| Paleta Future | Contraste y accesibilidad visual | Tonos azul-verde con fondo oscuro agradable | ✅ Mejorado | Aprobado |
| Integración de script | Persistencia de idioma/tema en `localStorage` | Mantiene selección tras recargar | ✅ Correcto | Aprobado |

---

## 🔹 4. Integración inicial
Se comenzó la integración del módulo interactivo de aprendizaje en las páginas:
- `/learn/programming.html`
- `/learn/english.html`

Ambas páginas comparten la misma lógica de idioma y tema mediante `assets/js/main.js`.  
Se probó la persistencia local (modo oscuro y selección de idioma) sin errores.

---

## 🔹 5. Resultados
El sistema funciona correctamente bajo los siguientes criterios de calidad:
- **Fiabilidad:** Las funciones se ejecutan sin fallos visibles.
- **Usabilidad:** Interfaz clara, accesible y coherente.
- **Eficiencia:** Respuesta inmediata en los eventos de usuario.
- **Compatibilidad:** Probado en Google Chrome, Microsoft Edge y Firefox (desktop).

---

## 🔹 6. Conclusión
El entorno de trabajo es estable y preparado para integrar el **primer módulo interactivo educativo**, que permitirá vincular el aprendizaje de inglés técnico con la práctica de programación.  
El cumplimiento parcial de las normas **ISO/IEC 25010** demuestra que CodeLingua avanza conforme a las buenas prácticas de calidad de software.

---

## 🔹 7. Próximos pasos (Día 6–7)
- Diseñar la **actividad interactiva 1**: completar frases de código con vocabulario técnico en inglés.  
- Implementar retroalimentación visual (mensajes de acierto/error).  
- Documentar las pruebas de interacción (UX/UI).  

