const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth.controller");
const checkEmail = require("../middleware/check-email");
const checkPassword = require("../middleware/check-password");

router.post("/signup", checkEmail, checkPassword, authCtrl.signup);
router.post("/login", authCtrl.login);
router.delete("/delete-account/:id", authCtrl.deleteAccount);

module.exports = router;
