const cloudinary = require("cloudinary");

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});

const cloudinaryUploadImg = async (fileToUploads) => {
	return new Promise((resolve) => {
		cloudinary.uploader.upload(fileToUploads, (result) => {
			resolve({
				url: result.secure_url,
			}, {
                resource_type: "auto",
            });
		});
	});
};

module.exports = cloudinaryUploadImg