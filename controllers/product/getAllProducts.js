const Product = require("../../models/productModel");
const asyncHandler = require("express-async-handler");

const gelAllProducts = asyncHandler(async (req, res) => {
	try {
		//Filtering
		const queryObj = { ...req.query };
		const excludeFields = ["page", "sort", "limit", "fields"];
		excludeFields.forEach((el) => delete queryObj[el]);

		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(
			/\b(gte|gt|lte|lt)\b/g,
			(match) => `$${match}`
		);

		let query = Product.find(JSON.parse(queryStr));

		//Sorting
		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			query = query.sort(sortBy);
		} else {
			query = query.sort("-createdAt");
		}

		//Limiting fields
		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			query = query.select(fields);
		}

		//Pagination
		const page = req.query.page;
		const limit = req.query.limit;
		const skip = (page - 1) * limit;
		query = query.skip(skip).limit(limit);
		if (req.query.page) {
			const productCount = await Product.countDocuments();
			if (skip >= productCount) throw new Error("This page does not exists");
		}

		const product = await query;
		res.json(product);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = gelAllProducts;
