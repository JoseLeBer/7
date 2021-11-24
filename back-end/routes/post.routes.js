const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", postCtrl.createPost);
router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost);
router.get("/:id", postCtrl.getOnePost);
router.get("/", postCtrl.getAllPosts);

module.exports = router;
