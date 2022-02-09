const mysql = require("mysql");

db = mysql.createConnection({
   user: process.env.USER_DB,
   password: process.env.PASSWORD_DB,
   host: process.env.HOST_DB,
   database: process.env.DATABASE,
});

module.exports = db;

const mysql2 = require("mysql2");

db2 = mysql2.createConnection({
   user: process.env.USER_DB,
   password: process.env.PASSWORD_DB,
   host: process.env.HOST_DB,
   database: process.env.DATABASE,
});

module.exports = db2;
