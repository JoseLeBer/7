const dB = require("../config/db");
const db = dB.connectDb();

exports.getOneUser = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM users WHERE id_user = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.updateOneUser = (req, re) => {};

exports.deleteOneUser = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM users WHERE id_user = ?";
  db.query(sql, id, (error, results) => {
    if (error) {
      res.status(404).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};
