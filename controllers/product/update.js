const { default: slugify } = require("slugify");
const Product = require("../../models/productModel");
const asynchandler = require("express-async-handler");

const update = asynchandler(async (req, res) => {
	const { id } = req.params;
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new:true});
		res.json(updateProduct)
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = update;
