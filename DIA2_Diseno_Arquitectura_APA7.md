# **Día 2 — Diseño y Arquitectura del Sistema**

## **Título del proyecto:** CodeLingua — Plataforma educativa para aprender programación e inglés

### **Introducción**
Durante esta segunda fase del proyecto *CodeLingua*, se diseña la arquitectura general del sistema y se definen los componentes estructurales y tecnológicos que harán posible su implementación.  
El enfoque principal se basa en la **calidad del diseño del software**, garantizando mantenibilidad, escalabilidad, seguridad y experiencia de usuario.  

---

## **1. Arquitectura propuesta**

El sistema se construirá bajo una arquitectura **cliente-servidor** con despliegue web mediante **GitHub Pages** en las primeras etapas y posible migración a un servidor educativo (como Replit o Render) en fases futuras.

### **Componentes principales**
1. **Frontend (interfaz de usuario)**  
   - Lenguajes: HTML5, CSS3, JavaScript ES6.  
   - Framework (fase posterior): React o Vue.js.  
   - Objetivo: interfaz limpia, accesible y responsiva.

2. **Backend (a implementar en fase futura)**  
   - Lenguaje: Node.js o Python (Flask/Django).  
   - Funcionalidad prevista: almacenamiento de progreso de usuarios, autenticación y registro.

3. **Base de datos (etapa posterior)**  
   - Opción sugerida: SQLite o Firebase.  
   - Objetivo: almacenar usuarios, niveles, logros y estadísticas.

4. **Control de versiones y despliegue**  
   - Repositorio GitHub con integración de GitHub Pages.  
   - Sistema de commits diarios y documentación continua.

---

## **2. Diseño de la estructura del proyecto**

La estructura de carpetas se define así:

