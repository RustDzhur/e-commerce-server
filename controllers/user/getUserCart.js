const Cart = require("../../models/cartModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const getUserCart = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	validationMongoDbId(_id);
	try {
		const cart = await Cart.findOne({ orderBy: _id }).populate(
			"products.product"
		);
		res.json(cart);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getUserCart;
