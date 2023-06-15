const Pool = require('pg').Pool;
require('dotenv').config();

const dbSettings = {
  user: process.env.DB_USERNAME,
  host: '127.0.0.1',
  database: 'todo_pern',
  password: '1234567',
  port: 5432,
}

const pool = new Pool(dbSettings);

module.exports = pool;