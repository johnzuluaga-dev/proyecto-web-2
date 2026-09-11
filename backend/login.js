const bcrypt = require('bcrypt');
const pool = require('./db');

async function iniciarSesion(email, password) {
  const [filas] = await pool.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email]
  );

  if (filas.length === 0) {
    return { exito: false, mensaje: 'Usuario no encontrado' };
  }

  const usuario = filas[0];
  const passwordValido = await bcrypt.compare(password, usuario.password);

  if (!passwordValido) {
    return { exito: false, mensaje: 'Contraseña incorrecta' };
  }

  return { exito: true, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } };
}

module.exports = iniciarSesion;
