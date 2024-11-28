const pool = require('../config/db');

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE,
      full_name VARCHAR(100),
      password VARCHAR(100),
      role VARCHAR(50)
    );
  `;
  await pool.query(query);
};

createTable();
