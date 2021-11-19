const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dbc = require("../config/db");

// CONTROLLER QUI PERMET LA CRÉATION DE NOUVEAU USER DANS LA BDD \\

// exports.signup = (req, res, next) => {
//   bcrypt
//     .hash(req.body.user_password, 10)
//     .then((hash) => {
//       const user = {
//         ...req.body,
//         user_password: hash,
//       };
//       const db = dbc.connectDb();
//       const sql = "INSERT INTO users SET ?";
//       db.query(sql, user, (error, result) => {
//         if (!result) {
//           console.log(error);
//         } else {
//           res.status(201).json({ message: "User created!" });
//         }
//       });
//     })
//     .catch((error) => res.status(400).json({ message: "Failed" }));
// };

exports.signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.user_password, 10);
    const user = {
      ...req.body,
      user_password: hash,
    };
    const db = dbc.connectDb();
    const sql = "INSERT INTO users SET ?";
    db.query(sql, user, (error, results) => {
      if (!results) {
        console.log(error);
      } else {
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
    const db = dbc.connectDb();
    const sql = "SELECT * FROM users WHERE user_email = ?";
    db.query(sql, userEmail, (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else if (results.length == 0) {
        res.status(404).json({ message: "User doesn't exist" });
      } else {
        const userPassword = req.body.user_password;
        //
        //
        const isValid = bcrypt.compare(userPassword, results.user_password);
        if (!isValid) {
          return res.status(401).json({ message: "Incorrect password" });
        } else {
          res.status(200).json({
            userId: results.id_user,
            token: jwt.sign({ userId: results.id_user }, "SECRETTOKEN", {
              expiresIn: "24h",
            }),
            message: "User found!",
          });
        }
        //
        //
      }
    });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
};
