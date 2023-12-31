const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			lowerCase: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true
		},
		brand: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true
		},
		sold: {
			type: Number,
			default: 0,
		},
		images: {
			type: Array,
		},
		color: {
			type: String,
			required: true
		},
		ratings: [
			{
				star: { type: Number, required: true },
				comment: {type: String},
				postedby: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
			},
		],
		totalRating: {
			type: String,
			default: 0
		}
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
