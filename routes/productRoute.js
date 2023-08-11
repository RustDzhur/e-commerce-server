const express = require("express");
const router = express.Router();
const productCrtl = require("../controllers");
const { authMiddleware, isAdmin } = require("../middlewares");
const {
	uploadPhoto,
	productImgResize,
} = require("../middlewares/uploadImages");

router.post("/product/create", authMiddleware, isAdmin, productCrtl.create);
router.put(
	"/product/upload/:id",
	authMiddleware,
	isAdmin,
	uploadPhoto.array("images", 10),
	productImgResize,
	productCrtl.uploadImages
);
router.get("/product/:id", productCrtl.getOneProduct);
router.get("/products", productCrtl.gelAllProducts);
router.put("/product/update/:id", authMiddleware, isAdmin, productCrtl.update);
router.put("/product/addToWishList", authMiddleware, productCrtl.addToWishList);
router.put("/product/rating", authMiddleware, productCrtl.rating);

router.delete(
	"/delete/:id",
	authMiddleware,
	isAdmin,
	productCrtl.deleteProduct
);

module.exports = router;
