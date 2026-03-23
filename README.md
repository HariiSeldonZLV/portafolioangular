# 🛰️ PORTAFOLIO ANGULAR // CYBERPUNK HUD INTERFACE

Este es un portafolio profesional desarrollado con **Angular 19**, diseñado bajo una estética "Technical" o Cyberpunk. El proyecto utiliza una paleta de colores de alto contraste (negro y rojo neón) y tipografías monoespaciadas para simular una interfaz de terminal de operaciones avanzada.

## 🚀 Características Principales

* **Standalone Components:** Arquitectura moderna de Angular sin módulos.
* **Interfaz HUD (Heads-Up Display):** Estética técnica con efectos de escaneo, tipografía `Doto` y bordes de neón.
* **Sistema de Mensajería:** Formulario de contacto funcional integrado con **EmailJS**.
* **Diseño Adaptativo (Responsive):** Optimizado para pantallas móviles y escritorio.
* **Gestión de Historia:** Cronología profesional detallada con hitos desde 1996 hasta la actualidad.

## 🛠️ Stack Tecnológico

* **Framework:** Angular 19+
* **Estilos:** SCSS (Sass) con encapsulación de estilos personalizada.
* **UI Components:** Angular Material (Icons).
* **Despliegue:** Netlify con integración continua (CI/CD).
* **Comunicación:** EmailJS para el manejo de correos sin backend.

## 📁 Estructura del Proyecto

* `/src/app/components`: Contiene los módulos de Historia, Estudios, Skills, Proyectos y Contacto.
* `/src/environments`: Configuración de variables de entorno seguras.
* `/public`: Recursos estáticos y activos del sistema.

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/HariiSeldonZLV/portafolioangular.git](https://github.com/HariiSeldonZLV/portafolioangular.git)
    cd portafolioangular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea el archivo `src/environments/environment.ts` e incluye tus credenciales de EmailJS:
    ```typescript
    export const environment = {
      production: false,
      emailjsServiceId: 'TU_SERVICE_ID',
      emailjsTemplateId: 'TU_TEMPLATE_ID',
      emailjsPublicKey: 'TU_PUBLIC_KEY'
    };
    ```

4.  **Ejecución local:**
    ```bash
    ng serve
    ```
    Navega a `http://localhost:4200/`.

## 🛡️ Notas de Seguridad y Despliegue

* El proyecto utiliza un archivo `.gitignore` configurado para proteger las llaves de acceso en el entorno de producción.
* Configurado con `.nvmrc` para asegurar la compatibilidad con Node v22.12.0+ en Netlify.
* Rutas de redirección configuradas en `netlify.toml` para soportar el enrutamiento de Angular (SPA).

---
Desarrollado por [Denis Salinas](https://www.linkedin.com/in/denis-salinas-49b6b352/) - 2026
