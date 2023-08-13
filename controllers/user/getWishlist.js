const User = require("../../models/userModel");
const Product = require("../../models/productModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const getWishlist = asyncHandler(async (req, res) => {
	try {
		const { _id } = req.user;
		validationMongoDbId(_id);
		const user = await User.findById(_id);
		const wishlist = await Product.find({ _id: { $in: user.wishlist } });
		res.json(wishlist);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getWishlist;
