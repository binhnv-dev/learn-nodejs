const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password:process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'my_database',
  port:process.env.DB_PORT || '3308',
  connectionLimit:10,
  waitForConnections:true,
  queueLimit:0
});


module.exports = connection;
