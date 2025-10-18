# **Día 1 — Configuración del entorno y contextualización del proyecto**

## **Título del proyecto: CodeLingua — Plataforma educativa para aprender programación e inglés**

### **Introducción**
El presente documento corresponde a la primera fase del proyecto *CodeLingua*, una aplicación web educativa que busca integrar el aprendizaje del idioma inglés con la programación, mediante un entorno interactivo y accesible para todo tipo de usuarios.  
El propósito central de este proyecto es fomentar la *calidad del software* desde su concepción, desarrollo y evaluación, siguiendo los estándares y buenas prácticas que garantizan la eficiencia, mantenibilidad y usabilidad de la aplicación.

### **Justificación**
En la actualidad, la educación tecnológica requiere herramientas que combinen la enseñanza de habilidades lingüísticas y técnicas. El inglés es el idioma predominante en el ámbito de la programación, por lo tanto, aprender ambos de manera simultánea representa una ventaja competitiva y pedagógica.  
*CodeLingua* busca ofrecer un entorno amigable donde el usuario aprenda estructuras de programación y vocabulario técnico en inglés de forma práctica, con actividades interactivas y ejemplos en tiempo real.

### **Objetivo general**
Desarrollar una aplicación web educativa que permita a los usuarios aprender programación e inglés simultáneamente, garantizando la calidad del software mediante la aplicación de normas, modelos, estándares y pruebas de validación.

### **Objetivos específicos**
- Configurar el entorno de desarrollo con control de versiones mediante Git y GitHub.  
- Establecer la estructura inicial del proyecto bajo buenas prácticas de programación.  
- Definir los lineamientos de calidad que regirán el desarrollo del aplicativo.  
- Documentar el proceso bajo normas APA 7 adaptadas a formato técnico Markdown.  

---

## **Configuración inicial del entorno**

### **1. Creación del repositorio**
Se creó el repositorio **CodeLingua** en GitHub, alojado en:  
👉 [https://github.com/Xaquis/CodeLingua](https://github.com/Xaquis/CodeLingua)

El repositorio incluye los archivos iniciales:
- `LICENSE.txt` → Define los derechos de autor y condiciones de uso del software.  
- `.gitignore` → Establece qué archivos no deben incluirse en el control de versiones.  
- `README.md` → Contiene la descripción general del proyecto.  

### **2. Configuración de Git local**
Ruta del proyecto: `E:\CodeLingua`  
Pasos ejecutados:

```bash
git init
git add .
git commit -m "Configuración inicial del entorno CodeLingua"
git branch -M main
git remote add origin https://github.com/Xaquis/CodeLingua.git
git push -u origin main
