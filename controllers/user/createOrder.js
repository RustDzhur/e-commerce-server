const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
const Product = require("../../models/productModel");
const Order = require("../../models/orderModel");
const uniqid = require("uniqid");

const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const createOrder = asyncHandler(async (req, res) => {
	const { COD, couponApplied } = req.body;
	const { _id } = req.user;
	validationMongoDbId(_id);
	try {
		if (!COD) throw new Error("Create cash order failed");
		const user = await User.findById(_id);
		let userCart = await Cart.findOne({ orderBy: user._id });
		let finalAmount = 0;
		if (couponApplied && userCart.totalAfterDicount) {
			finalAmount = userCart.totalAfterDicount;
		} else {
			finalAmount = userCart.cartTotal;
		}

		let newOrder = await new Order({
			products: userCart.products,
			paymentIntent: {
				id: uniqid(),
				method: "COD",
				amount: finalAmount,
				status: "Cash on Delivery",
				created: Date.now(),
				currency: "usd",
			},
			orderBy: user._id,
			orderStatus: "Cash on Delivery",
		}).save();
		let update = userCart.products.map((item) => {
			return {
				updateOne: {
					filter: {
						_id: item.product._id,
					},
					update: {
						$inc: { quantity: -item.count, sold: +item.count },
					},
				},
			};
		});

        const updated = await Product.bulkWrite(update, {})
        res.json({message: "Success", updated})
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = createOrder;
