# 📘 DÍA 10 — Aplicación de Estándares de Calidad (CMMI & ISO/IEC 25010)
**Proyecto:** CodeLingua  
**Autor:** Arlevy Sabogal  
**Fecha:** 22 de octubre de 2025  

---

## 🧭 1. Objetivo
Garantizar que *CodeLingua* cumpla con los estándares internacionales de calidad de software, asegurando:
- Eficiencia en el rendimiento.  
- Mantenibilidad del código.  
- Usabilidad para el usuario final.  
- Confiabilidad y corrección en la ejecución.  

Se aplican prácticas del modelo **CMMI para Desarrollo (nivel 3)** y la norma **ISO/IEC 25010:2011**.

---

## 🧩 2. Evaluación bajo ISO/IEC 25010

| Característica | Descripción aplicada a CodeLingua | Nivel actual | Meta |
|----------------|----------------------------------|---------------|------|
| **Funcionalidad** | Las unidades de aprendizaje de inglés y programación funcionan de manera independiente con registros en `localStorage`. | 90% | Integrar autenticación de usuarios. |
| **Usabilidad** | Interfaz *Future UI* clara, con contraste de color ajustado. Controles accesibles (botones grandes, texto legible). | 95% | Incluir accesibilidad para discapacidad visual. |
| **Eficiencia** | Código optimizado en `main.js` y `progress.js` con uso de eventos diferidos (`defer`). | 90% | Optimizar cargas condicionales por módulo. |
| **Confiabilidad** | El sistema guarda progreso y evita pérdida de datos tras recargar. | 85% | Agregar control de errores para sesiones y vidas. |
| **Mantenibilidad** | Estructura modular por archivos: `activity.js`, `progress.js`, `debug_progress.js`. | 100% | Mantener estructura bajo patrón MVC. |
| **Portabilidad** | Código HTML5, CSS3 y JS estándar. Totalmente compatible con navegadores modernos. | 100% | Extender soporte a móviles y PWA. |

---

## 🧠 3. Prácticas aplicadas de CMMI nivel 3

| Área de Proceso | Práctica aplicada | Evidencia |
|-----------------|------------------|------------|
| **RD (Requisitos)** | Recolección iterativa (días 1–9). | Markdown de cada día documentado. |
| **TS (Solución Técnica)** | Modularización del código y documentación diaria. | Archivos `.js` por funcionalidad. |
| **PI (Integración del Producto)** | Versionado en Git + validación en entorno local. | Commits progresivos. |
| **VER (Verificación)** | Pruebas manuales de flujo y corrección de UI. | Evidencias con capturas `final1.jpg` y `final2.jpg`. |
| **VAL (Validación)** | Ejecución funcional en GitHub Pages. | URL pública activa. |
| **PPQA (Aseguramiento de Calidad)** | Aplicación de revisión entre versiones y control de errores. | Control de commits y retroalimentación. |

---

## ⚙️ 4. Estandarización de Código

```js
(function () {
  'use strict';

  const CodeLingua = window.CodeLingua || {};
  CodeLingua.checkProgress = function (unit) {
    const progDone = localStorage.getItem(`cl_unit${unit}_prog_completed`) === 'true';
    const engDone  = localStorage.getItem(`cl_unit${unit}_eng_completed`) === 'true';

    if (progDone && engDone) {
      localStorage.setItem(`cl_unit${unit}_global_completed`, 'true');
      console.info(`✅ Unidad ${unit} completada globalmente`);
    }
  };

  window.CodeLingua = CodeLingua;
})();
```

---

## 🎨 5. Evaluación del Diseño UI/UX

| Criterio | Resultado | Acción de mejora |
|----------|------------|------------------|
| Contraste visual | Cumple con WCAG AA tras corrección de modo claro. | Mantener revisión cromática. |
| Claridad de navegación | Menú superior visible en todas las vistas. | Añadir breadcrumb dinámico. |
| Retroalimentación al usuario | Feedback inmediato tras cada respuesta. | Añadir animación de “acierto/error”. |
| Adaptabilidad | Responsive validado en 360–1920 px. | Optimizar visualización móvil. |

---

## 🔒 6. Próximas Implementaciones (Día 11–14)
1. **Sesiones y login de usuario.**
2. **Sistema de puntaje global (score) con ranking.**
3. **Registro de métricas de uso y tasa de éxito.**
4. **Exportación de reportes para control académico.**

---

## 📊 7. Conclusión
El proyecto *CodeLingua* cumple con la mayoría de los indicadores de **calidad estructural y funcional** definidos por **ISO/IEC 25010** y **CMMI nivel 3**.  
Las mejoras previstas en sesiones de usuario, score y métricas fortalecerán la trazabilidad y permitirán la transición a **fase de producción controlada (Beta pública)**.
