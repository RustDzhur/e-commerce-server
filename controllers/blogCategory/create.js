const Category = require("../../models/blogCategoryModel");
const asyncHandler = require("express-async-handler");

const blogCreateCategory = asyncHandler(async (req, res) => {
	try {
		const newCategory = await Category.create(req.body);
		res.json(newCategory);
	} catch (error) {
		throw new Error (error)
	}
});

module.exports = blogCreateCategory;
