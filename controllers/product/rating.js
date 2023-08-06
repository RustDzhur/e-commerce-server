const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const rating = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { star, prodId } = req.body;
    
	try {
		const product = await Product.findById(prodId);
		let alreadyRated = product.ratings.find(
			(userId) => userId.postedby.toString() === _id.toString()
		);
		if (alreadyRated) {
			const updateRatings = await Product.updateOne(
				{
					ratings: { $elemMatch: alreadyRated },
				},
				{ $set: { "ratings.$.star": star } },
				{ new: true }
			);
			res.json(updateRatings);
		} else {
			const ratedProduct = await Product.findByIdAndUpdate(
				prodId,
				{
					$push: {
						ratings: {
							star: star,
							postedby: _id,
						},
					},
				},
				{ new: true }
			);
			res.json(ratedProduct);
		}
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = rating;
