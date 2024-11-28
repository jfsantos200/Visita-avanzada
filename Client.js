const { Pool } = require('pg');
const pool = require('../config/db');

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      empresa VARCHAR(100),
      rnc VARCHAR(50),
      rubro VARCHAR(100),
      telefono VARCHAR(50),
      direccion VARCHAR(100),
      email VARCHAR(100)
    );
  `;
  await pool.query(query);
};

createTable();
