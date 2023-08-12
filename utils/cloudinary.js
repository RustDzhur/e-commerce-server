const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});

const cloudinaryUploadImg = async (fileToUpload) => {
	try {
		const result = await cloudinary.uploader.upload(fileToUpload, {
		  resource_type: "auto",
		});
		return result.secure_url;
	  } catch (error) {
		console.error(error);
		throw new Error("Failed to upload image to Cloudinary");
	  }
};

module.exports = cloudinaryUploadImg