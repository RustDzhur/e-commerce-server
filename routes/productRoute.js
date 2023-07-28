const express = require("express");
const router = express.Router();
const productCrtl = require("../controllers");
const { authMiddleware, isAdmin } = require("../middlewares");

router.post("/product/create", authMiddleware, isAdmin, productCrtl.create);
router.get("/product/:id", productCrtl.getOneProduct);
router.get("/products", productCrtl.gelAllProducts);
router.put("/product/update/:id", authMiddleware, isAdmin, productCrtl.update);
router.delete(
	"/delete/:id",
	authMiddleware,
	isAdmin,
	productCrtl.deleteProduct
);

module.exports = router;
