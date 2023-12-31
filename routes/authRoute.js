const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers");
const {authMiddleware, isAdmin} = require("../middlewares");


router.post("/signup", userCtrl.signup);
router.post("/signin-user", userCtrl.signinUser);
router.post("/signin-admin", userCtrl.signinAdmin);

router.get('/getWishlist', authMiddleware, userCtrl.getWishlist)
router.post('/cart', authMiddleware, userCtrl.userCart)
router.get('/user-cart', authMiddleware, userCtrl.getUserCart)
router.delete('/empty-cart', authMiddleware, userCtrl.emptyCart)
router.post('/apply-coupon', authMiddleware, userCtrl.applyCoupon)
router.post('/cash-order', authMiddleware, userCtrl.createOrder)
router.get('/get-orders', authMiddleware, userCtrl.getOrders)

router.post('/forgot-password-token', userCtrl.forgotPasswordToken)
router.put('/reset-password/:token', userCtrl.resetPassword)
router.get("/users", authMiddleware, userCtrl.getAllUsers);
router.get('/refresh', userCtrl.refreshToken)
router.get('/logout', userCtrl.logout)
router.get("/user/:id", authMiddleware, isAdmin, userCtrl.getUser);
router.delete("/deleteUser/:id", authMiddleware,  userCtrl.deleteUser)
router.put ("/update", authMiddleware,  userCtrl.updateUser)
router.put ("/saveAddress", authMiddleware,  userCtrl.saveUserAddress)
router.put ("/password/:id", authMiddleware,  userCtrl.updatePassword)
router.put('/block/:id', authMiddleware, isAdmin, userCtrl.blockUser)
router.put('/unblock/:id', authMiddleware, isAdmin, userCtrl.unBlockUser)
router.put('/update-order/:id', authMiddleware, isAdmin, userCtrl.updateOrderStatus)

module.exports = router;
