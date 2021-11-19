const mysql = require("mysql");
require("dotenv").config({ path: "./config/.env" });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports.connectDb = () => {
  return db;
};
