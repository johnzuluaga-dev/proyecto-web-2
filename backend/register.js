const bcrypt = require('bcrypt');
const pool = require('./db');

async function registrarUsuario(nombre, email, password) {
  const hash = await bcrypt.hash(password, 10);
  const [resultado] = await pool.query(
    'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, hash]
  );
  return resultado.insertId;
}

module.exports = registrarUsuario;
