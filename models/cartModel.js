const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
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
                price: {
                    type: Number
                }
			},
		],
		cartTotal: {
            type: Number
        },
        totalAfterDicount: {
            type: Number,
			default: 0
        },
		orderBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Cart", cartSchema);
