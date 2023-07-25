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
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
		},
		brand: {
			type: String,
			enum: ["Apple", "Samsung", "Lenovo"],
		},
		quantity: Number,
		sold: {
			type: Number,
			default: 0,
		},
		images: {
			type: Array,
		},
		color: {
			type: String,
			enum: ["Back", "Brown", "Red"],
		},
		ratings: [
			{
				start: Number,
				postedby: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
