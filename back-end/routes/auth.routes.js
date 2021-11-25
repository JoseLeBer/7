const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth.controller");

router.post("/signup", authCtrl.signup);
router.post("/login", authCtrl.login);
router.get("/delete-account/:id", authCtrl.deleteAccount);

module.exports = router;
