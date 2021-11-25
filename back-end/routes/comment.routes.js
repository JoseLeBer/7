const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comment.controller");

router.post("/", commentCtrl.createComment);
router.put("/:id", commentCtrl.updateComment);
router.delete("/:id", commentCtrl.deleteComment);
router.get("/:id", commentCtrl.getOneComment);
router.get("/", commentCtrl.getAllComments);

module.exports = router;
