const pool = require('../config/db');

exports.getAllClients = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClient = async (req, res) => {
  const { empresa, rnc, rubro, telefono, direccion, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO clients (empresa, rnc, rubro, telefono, direccion, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [empresa, rnc, rubro, telefono, direccion, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { empresa, rnc, rubro, telefono, direccion, email } = req.body;
  try {
    const result = await pool.query(
      'UPDATE clients SET empresa = $1, rnc = $2, rubro = $3, telefono = $4, direccion = $5, email = $6 WHERE id = $7 RETURNING *',
      [empresa, rnc, rubro, telefono, direccion, email, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM clients WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
