const Order = require("../../models/orderModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const updateOrderStatus = asyncHandler(async (req, res) => {
	const { status } = req.body;
	const { id } = req.params;
	validationMongoDbId(id);
	try {
		const updateOrderStatus = await Order.findByIdAndUpdate(
			id,
			{
				orderStatus: status,
				paymentIntent: {
					status: status,
				},
			},
			{ new: true }
		);
		res.json(updateOrderStatus);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = updateOrderStatus;
