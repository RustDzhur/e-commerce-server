const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
				count: {
					type: Number,
				},
				color: {
					type: String,
				},
			},
		],
		paymentIntent: {},
		orderStatus: {
			type: String,
			default: "Not Processed",
			enum: [
				"Not Processes",
				"Cash on Delivery",
				"Processing",
				"Dispatched",
				"Cancelled",
				"Delivered",
			],
		},
		orderBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Order", orderSchema);
