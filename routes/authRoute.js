const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers");

router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);
router.get('/users', userCtrl.getAllUsers)
router.get('/user/:id', userCtrl.getaUser)

module.exports = router;
