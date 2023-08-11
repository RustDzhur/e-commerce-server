const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

const getAllCoupons = asyncHandler(async (req, res) => {
	try {
		const getCoupons = await Coupon.find();
		res.json(getCoupons);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getAllCoupons;
