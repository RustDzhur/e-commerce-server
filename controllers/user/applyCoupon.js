const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const applyCoupon = asyncHandler(async (req, res) => {
	const { coupon } = req.body;
	const { _id } = req.user;
	validationMongoDbId(_id);
	try {
		const validCoupon = await Coupon.findOne({ name: coupon });
		if (validCoupon === null) {
			throw new Error("Ivalid Coupon");
		}
		const user = await User.findOne({ _id });
		let { cartTotal } = await Cart.findOne({
			orderBy: user._id,
		}).populate("products.product");
		let totalAfterDiscount = (
			cartTotal -
			(cartTotal * validCoupon.discount) / 100
		).toFixed(2);
        const newDiscountPrice = await Cart.findOneAndUpdate({orderBy: user._id}, {totalAfterDicount: totalAfterDiscount}, {new: true})
        res.json(newDiscountPrice)
	} catch (error) {
		throw new Error();
	}
});

module.exports = applyCoupon;
