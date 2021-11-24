const jwt = require("jsonwebtoken");
const dbc = require("../config/db");
require("dotenv").config({ path: "../config/.env" });

module.exports = (req, res, next) => {
  try {
    // On récupère le token dans le header "authorization"
    const token = req.headers.authorization.split(" ")[1];
    // Puis on décrypte le token avec la fonction "verify" de jwt
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    // On récupère le userId contenu dans le token
    const userId = decodedToken.userId;
    if (req.body.id_user && req.body.id_user !== userId) {
      throw "Invalid id_user";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Unauthenticated request" });
  }
};
