# Día 2 — Diseño y Arquitectura del Sistema

## Título del proyecto: CodeLingua — Plataforma educativa para aprender programación e inglés

### Introducción
Durante esta segunda fase del proyecto *CodeLingua*, se diseña la arquitectura general del sistema y se definen los componentes estructurales y tecnológicos que harán posible su implementación. El enfoque principal se basa en la **calidad del diseño del software**, garantizando mantenibilidad, escalabilidad, seguridad y experiencia de usuario.

### Objetivos del día 2
- Definir la estructura de carpetas y archivos del proyecto.
- Crear los archivos base del frontend (HTML, CSS, JS) para un prototipo funcional.
- Documentar cómo se aplican normas de calidad (ISO/IEC 25010 y IEEE 830) en el diseño.
- Preparar el repositorio para el Día 3: primera lección interactiva.

---

## 1. Arquitectura propuesta
**Frontend (client-side):**
- HTML5, CSS3 y JavaScript (ES6).
- Estructura modular por carpetas: `learn/`, `assets/`, `docs/`.

**Backend:** (no incluido en esta primera versión)
- Planificado para fases futuras (Node.js o Python).

---

## 2. Estructura de carpetas sugerida
```
CodeLingua/
│
├── index.html
├── about.html
├── learn/
│   ├── programming.html
│   └── english.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── logo.png
├── data/
│   └── lessons.json
├── docs/
│   ├── DIA1_Config_Entorno_APA7.md
│   └── DIA2_Diseno_Arquitectura_APA7.md
└── LICENSE.txt
```

---

## 3. Aplicación de normas de calidad (resumen)
- **ISO/IEC 25010**: se aplicarán las características de calidad (usabilidad, mantenibilidad, eficiencia, funcionalidad) en las decisiones de diseño: estructura modular, nombres claros, separación de responsabilidades, y diseño responsivo.
- **IEEE 830 (Especificación de Requisitos)**: documentar requisitos funcionales y no funcionales en próximos entregables; hoy se establecen requisitos altos-level (por ejemplo: la app debe ser accesible y responsive).
- **W3C / Accesibilidad**: HTML semántico, etiquetas ARIA cuando aplique, y contraste suficiente para usuarios con baja visión.

---

## 4. Archivos creados en esta fase
Se generaron los archivos base del frontend para iniciar el prototipo:
- `index.html` — página de inicio con navegación.
- `about.html` — página que explica la relación con la calidad del software.
- `learn/programming.html` — módulo básico de programación.
- `learn/english.html` — módulo básico de inglés.
- `assets/css/styles.css` — estilos globales.
- `assets/js/main.js` — lógica mínima: navegación y carga de lecciones.
- `data/lessons.json` — ejemplo de lecciones duales (programación + vocabulario en inglés).

---

## 5. Siguientes pasos (Día 3)
- Implementar lógica para mostrar tarjetas y quizzes usando `lessons.json`.
- Añadir pruebas unitarias simples (funciones de evaluación).
- Documentar casos de prueba y resultados en `docs/`.

---

## Referencias (APA 7)
- ISO/IEC 25010:2011. *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models.*
- IEEE. (1998). *IEEE Recommended Practice for Software Requirements Specifications (IEEE 830).*
- W3C. (2024). *Web Standards Overview*. https://www.w3.org/standards/

**Autor:** Arlevy Sabogal
**Fecha:** 16 de octubre de 2025
