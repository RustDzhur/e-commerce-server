const express = require("express");
const router = express.Router();
const couponCtrl = require("../controllers");
const { authMiddleware, isAdmin } = require("../middlewares");

router.post("/createCoupon", authMiddleware, isAdmin, couponCtrl.createCoupon);
router.get("/getAllCoupons", authMiddleware, isAdmin, couponCtrl.getAllCoupons);
router.put("/updateCoupon/:id", authMiddleware, isAdmin, couponCtrl.updateCoupon);
router.delete("/deleteCoupon/:id", authMiddleware, isAdmin, couponCtrl.deleteCoupon);

module.exports = router;
