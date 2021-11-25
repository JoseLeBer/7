const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth.controller");
const checkEmail = require("../middleware/check-email");

router.post("/signup", checkEmail, authCtrl.signup);
router.post("/login", authCtrl.login);
router.delete("/delete-account/:id", authCtrl.deleteAccount);

module.exports = router;
