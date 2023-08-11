const Product = require("../../models/productModel");
const asynchandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");
const cloudinaryUploadImg = require("../../utils/cloudinary");

const uploadImages = asynchandler(async (req, res) => {
	const { id } = req.params;
	validationMongoDbId(id);
	try {
		const uploader = (path) => cloudinaryUploadImg(path, "images");
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newPath = await uploader(path);
			urls.push(newPath);
		}

		const findProduct = await Product.findByIdAndUpdate(
			id,
			{
				images: urls.map((file) => {
					return file;
				}),
			},
			{ new: true }
		);
		res.json(findProduct);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = uploadImages;
