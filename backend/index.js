const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const iniciarSesion = require('./login');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del Frontend
app.use(express.static(path.join(__dirname, '../frontend/vistas')));

// Endpoint de Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      exito: false,
      mensaje: 'Por favor, completa los campos de correo y contraseña.'
    });
  }

  try {
    const resultado = await iniciarSesion(email, password);

    if (resultado.exito) {
      return res.status(200).json(resultado);
    } else {
      return res.status(401).json(resultado);
    }
  } catch (error) {
    console.error('Error en endpoint /api/login:', error);
    return res.status(500).json({
      exito: false,
      mensaje: 'Ocurrió un error inesperado en el servidor.'
    });
  }
});

// Ruta principal para servir la página
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/vistas/index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
