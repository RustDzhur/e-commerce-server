const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers");

router
.post("/signup", userCtrl.signup)
.post("/signin", userCtrl.signin)

module.exports = router;
