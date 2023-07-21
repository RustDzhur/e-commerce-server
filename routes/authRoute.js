const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers");

router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);
router.get("/users", userCtrl.getAllUsers);
router.get("/user/:id", userCtrl.getUser);
router.delete("/deleteUser/:id", userCtrl.deleteUser)
router.put ("/update/:id", userCtrl.updateUser)

module.exports = router;
