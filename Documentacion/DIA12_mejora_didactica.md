
# 📗 DÍA 12 — Mejora Didáctica y Mentoría Interactiva (Lin & Codder)

**Autor:** Arlevy Sabogal  
**Proyecto:** CodeLingua — Aprendizaje de Programación e Inglés Técnico  
**Fecha:** Día 12 de desarrollo  
**Versión del sistema:** v0.12-alpha

---

## 🎯 Objetivo
Implementar una capa didáctica previa a la evaluación: Lin y Codder introducen conceptos paso a paso, muestran ejemplos y guían al usuario antes de que comience la práctica.

---

## ✅ Archivos añadidos / modificados
- assets/js/learning_module.js — Módulo didáctico común (Lin y Codder).
- assets/js/narrator.js — (actualizado) Narrador / burbuja hablante.
- assets/css/style.css — (actualizado) Estilos para mentor-dialogue y speech-bubble.
- activities/activity_programming_unit1.html — Integración didáctica de Codder.
- activities/activity_english_unit1.html — Integración didáctica de Lin.
- Documentacion/DIA12_mejora_didactica.md — (este archivo) documentación del día.

---

## 🧩 Cambios funcionales
- Introducción progresiva antes de ejercicios (mentor-dialogue).
- Módulo learning_module.js detecta data-unit y despliega la secuencia didáctica.
- narrator.js muestra burbujas temporales (compatibles con learning_module).
- Las unidades ahora enseñan: explicación → ejemplo → práctica → retroalimentación.
- Mantiene compatibilidad con progress.js y el sistema de vidas / progreso.

---

## 📚 Justificación pedagógica
- Enseñar antes de evaluar reduce la frustración y aumenta retención (apto 8–65 años).
- Feedback inmediato y explicativo (no solo correcto/incorrecto).
- Estructura replicable para futuras unidades.

---

## 🔜 Próximos pasos
1. Ajustar contenido didáctico para cada unidad (más ejemplos y pistas).  
2. Implementar opción de “ver pista” y “mostrar explicación” al fallar.  
3. Día 13: IA básica de respuestas (mejorar mentor_system con RTA local).  
4. Día 14: Sesiones de usuario y persistencia por cuenta.

---

**Estado final del Día 12:** ✅ Módulo didáctico integrado en las unidades 1 de Programación e Inglés.
