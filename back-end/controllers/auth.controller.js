const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config/.env" });
const dB = require("../config/db");
const db = dB.connectDb();

// CONTROLLER QUI PERMET LA CRÉATION DE NOUVEAU USER DANS LA BDD \\

exports.signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.user_password, 10);
    const user = {
      ...req.body,
      user_password: hash,
    };
    const sql = "INSERT INTO users SET ?";
    db.query(sql, user, (error, results) => {
      if (!results) {
        console.log(error);
      } else {
        //console.log(results);
        res.status(201).json({ message: "User created" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: "Registration has failed" });
  }
};

// CONTROLLER QUI PERMET AUX UTILISATEURS EXISTANT DE SE CONNECTER À L'APPLICATION \\

exports.login = async (req, res) => {
  // On vérifie si le mail existe dans la base de donnée
  try {
    const userEmail = req.body.user_email;
    const sql = "SELECT * FROM users WHERE user_email = ?";
    db.query(sql, userEmail, (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else if (results[0] == undefined) {
        res.status(404).json({ message: "User doesn't exist" });
      } else {
        const userPassword = req.body.user_password;
        // console.log("hello world!");
        //console.log(results[0]);
        bcrypt.compare(userPassword, results[0].user_password).then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Incorrect password" });
          }
          res.status(200).json({
            userId: results[0].id_user,
            token: jwt.sign(
              { userId: results[0].id_user },
              process.env.SECRET_TOKEN,
              {
                expiresIn: "24h",
              }
            ),
          });
        });
      }
    });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
};

exports.deleteAccount = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM users WHERE id_user = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  });
};
