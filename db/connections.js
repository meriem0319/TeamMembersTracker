const mysql = require("mysql2");

//make connection to our database

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Maghreb@1",
  database: "devcompany",
});

module.exports = db;
