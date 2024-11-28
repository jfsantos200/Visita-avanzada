proyecto Node.js y Express. Este documento ayuda entender y recordar cómo configurar y ejecutar la aplicación, 
así como a explicar las funcionalidades implementadas hasta ahora.

---Tabla de Contenidos----------------------------------------------------------------------------------------

## Tabla de Contenidos

- Descripción
- Estructura del Proyecto
- Instalación
- Uso
- Funcionalidades
  - Autenticación
  - Gestión de Clientes
  - Gestión de Cotizaciones
  - Gestión de Visitas
  - Gestión de Usuarios
- Middlewares
  - authMiddleware
  - loggerMiddleware
  - errorHandlerMiddleware
  - validationMiddleware
- Archivos JSON para Almacenamiento
  - clients.json
  - cotizaciones.json
  - visitas.json
  - users.json
- Contribuciones
- Licencia

Requisitos Previos------------------------------------------------------------------------------------------------


## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
Configuración del Entorno
Instrucciones sobre cómo configurar variables de entorno, si es necesario.

## Configuración del Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

```plaintext
PORT=3000
NODE_ENV=development

### Ejecución de Pruebas

Instrucciones sobre cómo ejecutar pruebas, si has implementado alguna.

```markdown
## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test

### Despliegue

Instrucciones sobre cómo desplegar la aplicación en un entorno de producción.

```markdown
## Despliegue

Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

1. Asegúrate de tener configuradas las variables de entorno adecuadas.
2. Ejecuta el siguiente comando para iniciar el servidor en modo producción:

```bash
NODE_ENV=production node app.js

### Tecnologías Utilizadas-------------------------------------------------------------------------------



```markdown
## Tecnologías Utilizadas

- Node.js
- Express
- Body-parser
- Path
- FS (File System)

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme a través de j.santoshrc@gmail.com.

## Estado del Proyecto--------------------------------------------------------------------------------------

El proyecto está en fase de desarrollo. Las próximas funcionalidades planeadas incluyen:

- Implementación de notificaciones por correo electrónico.
- Integración con una base de datos.
- Mejora de la interfaz de usuario.

Capturas de Pantalla------------------------------------------------------------------------------------------


## Capturas de Pantalla

!Pantalla de Inicio

!Pantalla de Login

# Proyecto de Aplicación Web con Node.js y Express

## Descripción----------------------------------------------------------------------------------------------------------------------

Este proyecto es una aplicación web desarrollada con Node.js y Express que permite gestionar clientes, cotizaciones, visitas y usuarios. La aplicación incluye funcionalidades de autenticación y autorización, así como la capacidad de almacenar datos en archivos JSON.

## Estructura del Proyecto-------------------------------------------------------------------------------------------------------------

```plaintext
/app-visita-avanzada
│   app.js          # Punto de entrada de la aplicación
│   package.json    # Dependencias y scripts del proyecto
├───/routes         # Definición de rutas
│   │
│   ├── clientRoutes.js
│   ├── cotizacionRoutes.js
│   ├── visitaRoutes.js
│   ├── userRoutes.js
│   └── authRoutes.js
├───/controllers    # Lógica de manejo de rutas
│   ├── clientController.js
│   ├── cotizacionController.js
│   ├── visitaController.js
│   ├── userController.js
│   └── authController.js
├───/data           # Archivos JSON para almacenamiento de datos
│   ├── clients.json
│   ├── cotizaciones.json
│   ├── visitas.json
│   └── users.json
├───/middlewares    # Middlewares personalizados
│   ├── authMiddleware.js
│   ├── loggerMiddleware.js
│   ├── errorHandlerMiddleware.js
│   └── validationMiddleware.js
└───/public         # Archivos estáticos (HTML, CSS, JS)
    ├── cartera_clientes.html
    ├── cotizaciones.html
    ├── formulario_visita.html
    ├── index.html
    ├── login.html
    └── usuarios.html
```

## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd my-app
    ```

2. **Instalar las dependencias**:
    ```bash
    npm install
    ```

## Uso

1. **Iniciar el servidor**:
    ```bash
    node app.js
    ```

2. **Abrir el navegador y navegar a**:
    ```
    http://localhost:3000
    ```

## Funcionalidades

### Autenticación

- **Ruta**: `/auth/login`
- **Método**: `POST`
- **Descripción**: Permite a los usuarios iniciar sesión.
- **Middleware**: `validationMiddleware`

### Gestión de Clientes

- **Ruta**: `/clients`
- **Métodos**: `GET`, `POST`, `PUT`, `DELETE`
- **Descripción**: Permite gestionar la información de los clientes.
- **Middleware**: `authMiddleware`

### Gestión de Cotizaciones

- **Ruta**: `/cotizaciones`
- **Métodos**: `GET`, `POST`, `PUT`, `DELETE`
- **Descripción**: Permite gestionar las cotizaciones.

### Gestión de Visitas

- **Ruta**: `/visitas`
- **Métodos**: `GET`, `POST`, `PUT`, `DELETE`
- **Descripción**: Permite gestionar las visitas.

### Gestión de Usuarios

- **Ruta**: `/users`
- **Métodos**: `GET`, `POST`, `PUT`, `DELETE`
- **Descripción**: Permite gestionar los usuarios.

## Middlewares

### authMiddleware

- **Descripción**: Verifica si el usuario está autenticado antes de permitir el acceso a ciertas rutas.
- **Ubicación**: `middlewares/authMiddleware.js`

### loggerMiddleware

- **Descripción**: Registra detalles de cada solicitud entrante.
- **Ubicación**: `middlewares/loggerMiddleware.js`

### errorHandlerMiddleware

- **Descripción**: Captura y maneja errores en la aplicación.
- **Ubicación**: `middlewares/errorHandlerMiddleware.js`

### validationMiddleware

- **Descripción**: Valida los datos de entrada antes de procesarlos.
- **Ubicación**: `middlewares/validationMiddleware.js`

## Archivos JSON para Almacenamiento

### clients.json

- **Descripción**: Almacena la información de los clientes.
- **Ubicación**: `data/clients.json`

### cotizaciones.json

- **Descripción**: Almacena las cotizaciones.
- **Ubicación**: `data/cotizaciones.json`

### visitas.json

- **Descripción**: Almacena las visitas.
- **Ubicación**: `data/visitas.json`

### users.json

- **Descripción**: Almacena la información de los usuarios.
- **Ubicación**: `data/users.json`

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Este README debería proporcionarte una guía clara y concisa sobre cómo configurar, ejecutar y entender este proyecto. Si necesitas más detalles o tienes alguna otra pregunta, ¡no dudes en preguntar!