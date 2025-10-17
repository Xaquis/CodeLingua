# Día 3 – Interactividad, Usabilidad y Buenas Prácticas  
**Proyecto:** CodeLingua  
**Autor:** Arlevy Sabogal  
**Fecha:** 2025-10-16  
**Normas de referencia:** ISO/IEC 9126, ISO/IEC 25010, IEEE 1061  
**Formato:** APA 7ª edición  

---

## 1. Introducción

Durante el tercer día de desarrollo del proyecto *CodeLingua*, se abordó la implementación de características que mejoran la **interactividad** y la **experiencia del usuario**, fundamentales dentro de los criterios de calidad de software definidos por los estándares internacionales.  
Las funcionalidades principales introducidas fueron el **modo claro/oscuro** y el **selector de idioma dinámico**, ambas orientadas a reforzar los principios de **usabilidad, accesibilidad** y **eficiencia**.

---

## 2. Fundamento teórico

De acuerdo con la norma **ISO/IEC 9126** (y su actualización ISO/IEC 25010), la **usabilidad** se define como el grado en que un sistema puede ser utilizado por usuarios específicos para lograr objetivos con efectividad, eficiencia y satisfacción en un contexto determinado.  
Asimismo, la **adaptabilidad** y **accesibilidad** forman parte de los subatributos de la calidad en uso.  
El sistema debe permitir la personalización y el soporte multilingüe para diferentes tipos de usuario.

En el caso de *CodeLingua*, la implementación de estas funcionalidades responde a los siguientes atributos de calidad:

| Atributo ISO 25010 | Descripción aplicada a CodeLingua |
|--------------------|------------------------------------|
| **Usabilidad** | Interfaz intuitiva con cambios visuales inmediatos (tema claro/oscuro). |
| **Accesibilidad** | El usuario puede seleccionar idioma entre español e inglés. |
| **Eficiencia** | Se usa almacenamiento local (`localStorage`) para recordar preferencias sin recargar el servidor. |
| **Portabilidad** | Compatible con navegadores modernos (Chrome, Edge, Firefox, Opera). |

---

## 3. Implementación técnica

Se añadieron las siguientes funcionalidades en el archivo `main.js`:

- **Cambio de tema (🌙/☀️):**  
  Usa una clase CSS (`light-mode`) para alternar variables de color y guardar la preferencia en `localStorage`.
- **Cambio de idioma (🇪🇸/🇺🇸):**  
  Permite alternar textos entre español e inglés, almacenando la selección en `localStorage` para persistencia.
- **Eventos controlados en DOMContentLoaded:**  
  Garantiza que los elementos se carguen antes de ejecutar el script, evitando errores de referencia.

### Fragmento del código implementado

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');

  // Alternancia de modo claro/oscuro
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light-mode', savedTheme === 'light');

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Cambio de idioma dinámico
  const dictionary = {
    es: { title: "Aprende Programación e Inglés" },
    en: { title: "Learn Programming and English" }
  };

  function updateLanguage(lang) {
    document.getElementById('page-title').textContent = dictionary[lang].title;
  }
});
```

---

## 4. Resultados

Las pruebas locales confirmaron que:

- El sitio conserva el tema y el idioma elegidos tras recargar o cerrar sesión.  
- El cambio es instantáneo y fluido gracias a transiciones CSS.  
- El comportamiento cumple con las **buenas prácticas de interfaz adaptativa**, recomendadas por las guías de **usabilidad de la norma ISO/IEC 9241-110**.

---

## 5. Conclusiones

La incorporación de componentes interactivos contribuye directamente a la **calidad percibida por el usuario final**, facilitando la navegación y fomentando la personalización.  
Además, demuestra la aplicación práctica de las normas ISO/IEC en el desarrollo de software educativo web, cumpliendo los criterios de calidad esperados en el proyecto.

---

## 6. Referencias (APA 7)

- ISO/IEC 9126-1:2001. *Software Engineering — Product Quality — Part 1: Quality Model.*  
- ISO/IEC 25010:2011. *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE).*  
- IEEE Std 1061-1998. *Standard for a Software Quality Metrics Methodology.*  
- Nielsen, J. (1993). *Usability Engineering.* Academic Press.  
- Pressman, R. S. (2020). *Ingeniería del Software: Un enfoque práctico.* McGraw-Hill Education.

---

**Fin del documento — Día 3.**
