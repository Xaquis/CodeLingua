# Día 4 – Pruebas Iniciales, Validación Visual y Control de Calidad del Proyecto CodeLingua

## Resumen
Durante el cuarto día de desarrollo del proyecto *CodeLingua*, se realizaron pruebas iniciales de funcionalidad, consistencia visual y control de calidad del software.  
El objetivo principal fue validar la correcta integración del nuevo tema visual **Future**, asegurar la coherencia de rutas entre los diferentes módulos del aplicativo web y confirmar la estabilidad del despliegue en *GitHub Pages*.  
Se aplicaron pruebas manuales y técnicas basadas en los criterios del modelo **ISO/IEC 25010**, garantizando una interfaz estable, accesible y agradable al usuario.

---

## 1. Introducción
En el marco del proyecto académico de *Calidad de Software*, el día 4 se enfocó en la evaluación inicial del sistema CodeLingua.  
El propósito de esta jornada fue comprobar el funcionamiento visual y técnico del sitio, así como validar los principios fundamentales de usabilidad, mantenibilidad y fiabilidad dentro de la aplicación web.  
Este proceso forma parte del ciclo de mejora continua que caracteriza el desarrollo orientado a calidad.

---

## 2. Metodología
Las pruebas se realizaron mediante un enfoque de **verificación manual** y observación directa del comportamiento del aplicativo.  
Se utilizó **Git Bash** para la gestión de versiones, **GitHub Pages** como entorno de despliegue y las **herramientas DevTools** del navegador para comprobar la persistencia de variables (tema e idioma).

| Tipo de Prueba | Descripción | Resultado Esperado |
|----------------|-------------|--------------------|
| **Visual (UI)** | Validar que los elementos de interfaz (fondos, botones y texto) se visualicen con la nueva paleta Future. | Paleta aplicada correctamente en todo el sitio. |
| **Funcionalidad básica** | Verificar funcionamiento de los botones de tema (🌙/☀️) y lenguaje (🇪🇸/🇺🇸). | Cambio dinámico con persistencia. |
| **Persistencia** | Confirmar que las preferencias se almacenen en `localStorage`. | Valores guardados y cargados correctamente. |
| **Despliegue** | Validar actualización del sitio en GitHub Pages. | Despliegue exitoso sin errores de caché. |

---

## 3. Resultados
Tras las pruebas realizadas, se observó lo siguiente:

- La **paleta Future** se aplicó exitosamente en todos los módulos.  
- El cambio de idioma y de modo visual se comporta de manera **estable y fluida**.  
- No se presentaron errores en consola ni conflictos de rutas CSS.  
- Los valores de idioma (`lang`) y tema (`theme`) se conservaron después de recargar la página.  
- El sitio desplegado en *GitHub Pages* se actualizó correctamente tras el commit `02d7502`.

Estos resultados confirman la correcta integración de los componentes visuales y la madurez de la fase inicial del producto.

---

## 4. Acciones Correctivas
Durante la jornada se identificó un error en las rutas del archivo CSS (`styles.css` en lugar de `style.css`), el cual fue corregido.  
Se eliminó el archivo duplicado y se unificaron todas las referencias, manteniendo consistencia en el proyecto.  
Además, se ajustó la caché y se forzó la actualización en GitHub Pages para garantizar la propagación del nuevo tema visual.

---

## 5. Relación con el Modelo ISO/IEC 25010

| Atributo de Calidad | Aplicación en CodeLingua |
|---------------------|---------------------------|
| **Usabilidad** | Interfaz amigable, con contraste equilibrado y opciones accesibles para cambio de idioma y tema. |
| **Mantenibilidad** | Estructura de archivos coherente, control de versiones activo en Git. |
| **Fiabilidad** | Persistencia de configuraciones en almacenamiento local y carga estable del sitio. |
| **Portabilidad** | Correcto funcionamiento en navegadores principales (Chrome, Edge, Firefox). |

---

## 6. Conclusiones
El aplicativo *CodeLingua* cumple con los requisitos de calidad visual y consistencia establecidos para esta fase.  
El sistema demostró estabilidad y buena respuesta ante los cambios de configuración, manteniendo los principios de la norma ISO/IEC 25010.  
La integración del tema **Future** representa un avance importante hacia un producto educativo con identidad visual propia, moderna y funcional.

---

## 7. Referencias
- ISO/IEC 25010:2011. *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models.*  
- Pressman, R. S. (2019). *Ingeniería del software: un enfoque práctico.* McGraw-Hill Education.  
- Sommerville, I. (2020). *Software Engineering* (10th ed.). Pearson.
