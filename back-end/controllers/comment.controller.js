const dB = require("../config/db");
const db = dB.connectDb();

// CONTROLLER QUI PERMET LA CRÉATION D'UN COMMENTAIRE \\
exports.createComment = (req, res, next) => {
  const comment = {
    ...req.body,
  };
  const sql = "INSERT INTO comments SET ?";
  db.query(sql, comment, (error, results) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      res.status(201).json({
        message: "Comment created",
        results,
      });
    }
  });
};

// CONTROLLER QUI PERMET LA MISE À JOUR D'UN COMMENTAIRE \\
exports.updateComment = (req, res, next) => {
  const text = req.body.text;
  const id = req.params.id;
  const sql = "UPDATE comments SET text = ? WHERE id_comment = ?";
  db.query(sql, [text, id], (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI PERMET LA SUPPRESSION D'UN COMMENTAIRE \\
exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  const sql = "DELETE FROM comments WHERE id_comment = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI AFFICHE UN COMMENTAIRE \\
exports.getOneComment = (req, res, next) => {
  const id = req.params.id;
  const sql = "SELECT * FROM comments WHERE id_comment = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// CONTROLLER QUI AFFICHE TOUS LES COMMENTAIRES D'UN POST\\
exports.getAllComments = (req, res, next) => {
  const idPost = req.params.id;
  const sql = "SELECT * FROM comments WHERE id_post = ?";
  db.query(sql, idPost, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

// exports.getAllComments = (req, res, next) => {
//   const idPost = req.params.id;
//   const sql =
//     "SELECT * FROM comments JOIN posts ON comments.id_post = posts.id_post WHERE comments.id_post = ?";
//   db.query(sql, idPost, (error, results) => {
//     if (error) {
//       res.status(404).json({ error });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };
