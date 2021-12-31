const express = require("express");
const router = express.Router();

const authMdl = require("../middleware/auth.middleware");
const userCtrl = require("../controllers/user.controller");

router.put("/:id", userCtrl.updateOneUser);
router.delete("/:id", userCtrl.deleteOneUser);
router.get("/:id", userCtrl.getOneUser);

module.exports = router;
