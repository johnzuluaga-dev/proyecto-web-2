-- Script para la creación de la base de datos y la tabla de usuarios
-- Base de datos: mi_app

CREATE DATABASE IF NOT EXISTS mi_app;
USE mi_app;

-- Estructura de tabla para la tabla `usuarios`
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuario de prueba predeterminado (si no existe)
-- Contraseña en texto plano para las pruebas: 123456789
-- Hash bcrypt para '123456789': $2a$10$6wXV32vp82zNMY203LYOWOSeXjeXQIbd9sWzI3Cv3hTzZqo88IZZK

INSERT INTO usuarios (nombre, email, password) 
VALUES ('Usuario Aurora', 'ejemplo@aurora.art', '$2a$10$6wXV32vp82zNMY203LYOWOSeXjeXQIbd9sWzI3Cv3hTzZqo88IZZK')
ON DUPLICATE KEY UPDATE password=VALUES(password);
