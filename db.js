// const mysql = require("mysql2/promise");
// const dotenv = require("dotenv");
// dotenv.config();

// const mysqlPool = mysql.createPool({
//   host: process.env.Host,
//   user: process.env.user,
//   password: process.env.Password,
//   database: process.env.Database,
// });

// module.exports = mysqlPool;

require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.Host,
    user: process.env.user,
    password: process.env.Password,
    database: process.env.Database,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

module.exports = pool;
