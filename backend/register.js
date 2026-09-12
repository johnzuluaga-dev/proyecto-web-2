const bcrypt = require('bcryptjs');
const pool = require('./db');

async function registrarUsuario(nombre, email, password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    const [resultado] = await pool.query(
      'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
      [nombre, email, hash]
    );
    return { exito: true, id: resultado.insertId };
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    return { exito: false, mensaje: error.message };
  }
}

module.exports = registrarUsuario;
