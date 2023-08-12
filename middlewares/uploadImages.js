const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require ('fs').promises

const multerStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/images"));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
	},
});

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image")) {
		cb(null, true);
	} else {
		cb(
			{
				message: "Unsupported file format",
			},
			false
		);
	}
};

const uploadPhoto = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
	limits: { fieldNameSize: 2000000 },
});

const deleteImage = async (file) => {
	await fs.unlink(file);
};

const resizeImage = async (file, destination) => {
	const resizedFileName = `public/images/${destination}/${file.filename}`;

	await sharp(file.path)
		.resize(300, 300)
		.toFormat("jpeg")
		.jpeg({ quality: 90 })
		.toFile(resizedFileName);
};

const productImgResize = async (req, res, next) => {
	if (!req.files) return next();
	await Promise.all(
		req.files.map(async (file) => {
			await resizeImage(file, "products");
			await deleteImage(`public/images/products/${file.filename}`);
		})
	);
	next();
};

const blogImgResize = async (req, res, next) => {
	if (!req.files) return next();
	await Promise.all(
		req.files.map(async (file) => {
			await resizeImage(file, "blogs");
			await deleteImage(`public/images/blogs/${file.filename}`);
		}),
	);
	next();
};

module.exports = { uploadPhoto, productImgResize, blogImgResize, deleteImage };
