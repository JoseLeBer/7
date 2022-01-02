const jwt = require("jsonwebtoken");
const dB = require("../config/db");
const db = dB.connectDb();
require("dotenv").config({ path: "../config/.env" });

module.exports = (req, res, next) => {
  try {
    // On récupère le token dans le header "authorization"
    const token = req.headers.authorization.split(" ")[1];
    // Puis on décrypte le token avec la fonction "verify" de jwt
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    // On récupère le userId contenu dans le token
    const userId = decodedToken.userId;
    const sql = "SELECT id_user FROM users WHERE id_user = ?";
    db.query(sql, userId, (error, results) => {
      if (results.id_user && results.id_user !== userId) {
        res.status(403).json({ error });
        throw "Invalid id_user";
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ error: error | "Unauthenticated request" });
  }
};
