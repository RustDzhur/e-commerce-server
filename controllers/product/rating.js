const Product = require("../../models/productModel");
const asyncHandler = require("express-async-handler");

const rating = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { star, prodId, comment } = req.body;

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
				{ $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
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
							comment: comment,
							postedby: _id,
						},
					},
				},
				{ new: true }
			);
		}
		const getAllRatings = await Product.findById(prodId);
		let totalRatings = getAllRatings.ratings.length;
		let ratingSum = getAllRatings.ratings
			.map((item) => item.star)
			.reduce((prev, current) => prev + current, 0);
		let actualRating = Math.round(ratingSum / totalRatings);
		let finalProduct = await Product.findByIdAndUpdate(
			prodId,
			{
				totalRating: actualRating,
			},
			{ new: true }
		);
		res.json(finalProduct);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = rating;
