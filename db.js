const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.password,
  database: process.env.Database,
});

module.exports = mysqlPool;
