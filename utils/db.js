const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: parseInt(process.env.POSTGRES_PORT),
});

module.exports = pool;
