const { Pool } = require('pg');
const pool = require('../config/db');

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS visits (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100),
      apellido VARCHAR(100),
      fecha DATE,
      motivo TEXT
    );
  `;
  await pool.query(query);
};

createTable();
