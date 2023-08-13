const Blog = require("../../models/blogModel");
const asynchandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");
const cloudinaryUploadImg = require("../../utils/cloudinary");
const { deleteImage } = require("../../middlewares/uploadImages");

const uploadImages = asynchandler(async (req, res) => {
	const { id } = req.params;
	validationMongoDbId(id);
	try {
		const uploader = (path) => cloudinaryUploadImg(path);
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newPath = await uploader(path);
			await deleteImage(path)
			urls.push(newPath);
		}

		const findBlog = await Blog.findByIdAndUpdate(
			id,
			{
				images: urls.map((file) => {
					return file;
				}),
			},
			{ new: true }
		);
		res.json(findBlog);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = uploadImages;
