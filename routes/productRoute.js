const express = require("express");
const router = express.Router();
const productCrtl = require("../controllers");
const { authMiddleware, isAdmin } = require("../middlewares");

router.post("/create", authMiddleware, isAdmin, productCrtl.create);
router.get("/:id", productCrtl.getOneProduct);
router.get("/", productCrtl.gelAllProducts);
// router.get("/filterProduct", productCrtl.filterProduct);
router.put("/update/:id", authMiddleware, isAdmin, productCrtl.update);
router.delete(
	"/delete/:id",
	authMiddleware,
	isAdmin,
	productCrtl.deleteProduct
);

module.exports = router;
