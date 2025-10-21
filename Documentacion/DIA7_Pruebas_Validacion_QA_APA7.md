
# DÍA 7 – PRUEBAS DE VALIDACIÓN Y QA (APA7)
**Proyecto:** CodeLingua — Sistema de Aprendizaje Integrado  
**Autor:** Arlevy Sabogal  
**Fecha:** 21/10/2025  
**Etapa:** Día 7 de 23 — Validación y Control de Calidad (QA)

---

## 1. Introducción
El objetivo principal de esta fase es validar la funcionalidad del sistema CodeLingua mediante pruebas controladas que aseguren la correspondencia entre los requisitos funcionales y el comportamiento real del software. Se busca verificar la experiencia del usuario, la estabilidad del sistema y el cumplimiento de estándares de calidad de software (CMMI, ISO/IEC 25010).

---

## 2. Tipos de pruebas aplicadas

| Tipo de prueba | Descripción | Resultado esperado |
|----------------|--------------|---------------------|
| **Prueba funcional** | Validar cada componente interactivo (botones, inputs, navegación, almacenamiento local). | Comportamiento coherente y sin errores. |
| **Prueba de validación visual (UI)** | Confirmar legibilidad, contraste, distribución y responsividad. | Interfaz clara, intuitiva y accesible. |
| **Prueba de persistencia** | Comprobar almacenamiento de progreso, idioma y tema en `localStorage`. | Datos conservados entre sesiones. |
| **Prueba de lógica de vidas** | Verificar reducción de vidas al fallar y regeneración tras 5 minutos. | Sistema estable y sin bucles infinitos. |
| **Prueba de flujo completo** | Comprobar que una unidad puede completarse correctamente y redirige al módulo final. | Unidad completa marcada y guardada. |

---

## 3. Resultados

| Caso de prueba | Estado | Evidencia |
|----------------|---------|-----------|
| Cambio de tema (claro/oscuro) | ✅ Correcto | Interfaz cambia visualmente sin errores. |
| Cambio de idioma (🇪🇸/🇺🇸) | ⚠️ Parcial | Traducción del texto dinámico aún pendiente de ampliación. |
| Ejercicios — respuestas correctas | ✅ | Retroalimentación inmediata y avance del progreso. |
| Ejercicios — respuestas incorrectas | ✅ | Se consume vida y muestra mensaje de error. |
| Regeneración de vidas tras 5 minutos | 🕒 En prueba | Mecanismo funcional, requiere medición temporal precisa. |
| Finalización de unidad (Codder/Lin) | ✅ | Redirección a `unit_complete.html` con mensaje personalizado. |

---

## 4. No conformidades detectadas
- Traducción incompleta en algunos textos de UI.  
- Falta de efecto visual de progreso (animación de barra).  
- Codder y Lin aún no tienen animación de saludo inicial implementada.  

---

## 5. Recomendaciones
- Implementar un módulo de internacionalización (i18n) más amplio.  
- Aplicar microanimaciones CSS para retroalimentación visual positiva/negativa.  
- Realizar pruebas cruzadas en dispositivos móviles con pantallas pequeñas.  

---

## 6. Conclusiones
El sistema CodeLingua ha superado satisfactoriamente las pruebas funcionales básicas y la validación inicial de experiencia de usuario. Se confirma su estabilidad en modo oscuro (“Future”) y su correcto manejo del almacenamiento local.  
Se recomienda avanzar al **Día 8 – Optimización y Responsividad Móvil.**
