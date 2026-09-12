# Proyecto Login - Aurora Comunidad Creativa

## Integrantes del Grupo 2 (Login)

- **Cristian Quintero**
- **Juan Pablo Cartagena**
- **Carol Rivera**
- **Jhon Zuluaga**
- **Kevin Enriquez**

---

## 📌 Descripción del Proyecto

Este proyecto consiste en una prueba técnica de un módulo de **Inicio de Sesión (Login)** para la plataforma ficticia **Aurora Comunidad Creativa**. La aplicación cuenta con una interfaz web visualmente atractiva adaptada a partir de un prototipo de diseño, así como una arquitectura backend construida en **Node.js** encargada de consultar la base de datos **MySQL** y verificar contraseñas encriptadas mediante hashes **bcrypt**.

---

## 🚀 Tecnologías Utilizadas

- **Frontend:**
  - **HTML5:** Estructuración semántica de la interfaz.
  - **CSS3:** Diseño responsivo con Vanilla CSS, gradientes, tarjeta con sombras suaves, formas orgánicas (blobs) y animaciones flotantes.
  - **JavaScript (ES6+):** Lógica del cliente, alternancia de visibilidad de contraseña, peticiones AJAX (`fetch`) y sistema de notificaciones Toast.

- **Backend:**
  - **Node.js:** Entorno de ejecución para el servidor.
  - **Express.js:** Framework para la creación de la API HTTP.
  - **MySQL / `mysql2`:** Base de datos relacional y cliente de conexión con promesas.
  - **`bcryptjs`:** Encriptación y verificación de contraseñas mediante hashing seguro.
  - **`cors` & `dotenv`:** Manejo de peticiones de origen cruzado y variables de entorno.

---

## 📁 Estructura del Proyecto y Descripción de Secciones

```text
login/
├── package.json          # Configuración principal para ejecutar npm start desde la raíz
├── README.md             # Documentación del proyecto
├── backend/
│   ├── index.js          # Servidor Express principal (Puerto 3000)
│   ├── login.js          # Lógica de inicio de sesión y comparación de hash bcrypt
│   ├── register.js       # Registro de usuarios (módulo auxiliar)
│   ├── db.js             # Conexión Pool a la base de datos MySQL
│   ├── tabla.sql         # Script SQL para la tabla 'usuarios' y datos de prueba
│   ├── .env              # Configuración de puerto y puerto/credenciales MySQL
│   └── package.json      # Dependencias del servidor Node.js
└── frontend/
    └── vistas/
        ├── index.html    # Estructura del login y diseño visual
        ├── style.css     # Estilos CSS, colores, animaciones y elementos gráficos
        └── app.js        # Interacción del cliente, validaciones y fetch a la API
```

---

## 🔑 Credenciales de Prueba

Para probar el inicio de sesión exitoso:

- 📧 **Correo Electrónico:** `ejemplo@aurora.art`
- 🔑 **Contraseña:** `123456789`

Al ingresar estas credenciales y presionar **Iniciar Sesión**, la aplicación mostrará una alerta verde flotante con el mensaje:  
`¡Iniciaste sesión con éxito! Bienvenido a Aurora Comunidad Creativa.`

---

## ⚙️ Instrucciones de Ejecución

### 1. Preparar la Base de Datos MySQL
1. Inicia tu servicio de MySQL local.
2. Ejecuta el archivo SQL ubicado en `backend/tabla.sql` dentro de tu gestor de base de datos (MySQL Workbench, phpMyAdmin o consola):
   ```sql
   CREATE DATABASE IF NOT EXISTS mi_app;
   ```
3. Revisa el archivo `backend/.env` y ajusta `DB_PASSWORD` si tu contraseña de MySQL local es diferente a la predeterminada (`123456789`).

### 2. Iniciar el Servidor (Puerto 3000)
Abre la terminal en la carpeta principal del proyecto (`login`) y ejecuta:

```powershell
npm start
```

El servidor iniciará en el **Puerto 3000** y mostrará en consola:
`🚀 Servidor ejecutándose en http://localhost:3000`

### 3. Probar la Aplicación
Abre tu navegador de preferencia e ingresa a:  
👉 **`http://localhost:3000`**
