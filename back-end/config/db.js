const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "groupomania",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de donnée MySQL !");
});
