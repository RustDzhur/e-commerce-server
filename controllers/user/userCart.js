const User = require("../../models/userModel");
const Product = require("../../models/productModel");
const Cart = require("../../models/cartModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const userCart = asyncHandler(async (req, res) => {
	const { cart } = req.body;
	const { _id } = req.user;
	validationMongoDbId(_id);
	try {
		let products = [];
		const user = await User.findById(_id);
		const alreadyExistCart = await Cart.findOne({ orderBy: user._id });
		if (alreadyExistCart) {
			alreadyExistCart.remove();
		}
		for (let i = 0; i < cart.length; i++) {
			let object = [];
			object.product = cart[i]._id;
			object.count = cart[i].count;
			object.color = cart[i].color;
			let getPrice = await Product.findById(cart[i]._id)
				.select("price")
				.exec();
			object.price = getPrice.price;
			products.push(object);
		}
		let cartTotal = 0;
		for (let i = 0; i < products.length; i++) {
			cartTotal += products[i].price * products[i].count;
		}
		
        let newCart = await new Cart({
            products,
            cartTotal,
            orderBy: user?._id
        }).save()
        res.json(newCart)
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = userCart;
