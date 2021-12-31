const dB = require("../config/db");
const db = dB.connectDb();

// CONTROLLER QUI PERMET LA CRÉATION D'UN POST \\
exports.createPost = (req, res, next) => {
  let image_url = "";
  if (req.file != undefined) {
    image_url = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
  const post = {
    ...req.body,
    image: image_url,
  };
  const sql = "INSERT INTO posts SET ?";
  db.query(sql, post, (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error });
    } else {
      res.status(201).json({
        message: "Post created",
        results,
      });
    }
  });
};

// CONTROLLER QUI PERMET LA MISE À JOUR D'UN POST \\
exports.updatePost = (req, res, next) => {
  const text = req.body.text;
  const id = req.params.id;
  // d'abord select le post avec l'id du user connecté si ça match requete d'en dessous
  const sql = "UPDATE posts SET text = ? WHERE id_post = ?";
  db.query(sql, [text, id], (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI PERMET LA SUPPRESSION D'UN POST \\
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  const sql = "DELETE FROM posts WHERE id_post = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI AFFICHE UN POST \\
exports.getOnePost = (req, res, next) => {
  const id = req.params.id;
  const sql = "SELECT * FROM posts WHERE id_post = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI AFFICHE TOUS LES POSTS \\
exports.getAllPosts = (req, res, next) => {
  const sql = "SELECT * FROM posts ORDER BY creation_date DESC";
  db.query(sql, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};
