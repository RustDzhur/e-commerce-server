const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

const getAllBlogs = asyncHandler(async (req, res) => {
	try {
		const getAllBlogs = await Blog.find();
		res.json(getAllBlogs);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getAllBlogs;
