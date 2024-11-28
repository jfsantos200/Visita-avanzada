// const pool = require('../config/db');
// const bcrypt = require('bcrypt');

// exports.getAllUsers = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT id, username, full_name, role FROM users');
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.createUser = async (req, res) => {
//   const { username, full_name, password, role } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const result = await pool.query(
//       'INSERT INTO users (username, full_name, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
//       [username, full_name, hashedPassword, role]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { full_name, role } = req.body;

//   try {
//     const result = await pool.query(
//       'UPDATE users SET full_name = $1, role = $2 WHERE id = $3 RETURNING *',
//       [full_name, role, id]
//     );
//     res.json(result.rows[0]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await pool.query('DELETE FROM users WHERE id = $1', [id]);
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const pool = require('../config/db');
// const bcrypt = require('bcrypt');

// // Crear el usuario inicial (admin)
// const createAdminUser = async () => {
//   const hashedPassword = await bcrypt.hash('1234', 10);
//   await pool.query(
//     'INSERT INTO users (username, full_name, password, role) VALUES ($1, $2, $3, $4) ON CONFLICT (username) DO NOTHING',
//     ['admin', 'Admin User', hashedPassword, 'admin']
//   );
// };

// createAdminUser();

// exports.getAllUsers = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT id, username, full_name, role FROM users');
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.createUser = async (req, res) => {
//   const { username, full_name, password, role } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const result = await pool.query(
//       'INSERT INTO users (username, full_name, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
//       [username, full_name, hashedPassword, role]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const pool = require('../config/db');  // Conexión a la base de datos
const bcrypt = require('bcrypt');
// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);  // Enviar los usuarios como respuesta
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario específico por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { username, password, full_name, role } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, password, full_name, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, password, full_name, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario existente por ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, full_name, role } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET username = $1, password = $2, full_name = $3, role = $4 WHERE id = $5 RETURNING *',
      [username, password, full_name, role, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
