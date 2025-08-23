const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const mysqlPool = mysql.createPool({
  host: process.env.Host,
  user: process.env.USER,
  password: process.env.password,
  database: process.env.Database,
});

module.exports = mysqlPool;
