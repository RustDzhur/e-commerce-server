const {
	signup,
	signin,
	getAllUsers,
	getUser,
	deleteUser,
	updateUser,
	blockUser,
	unBlockUser,
	refreshToken,
	logout,
	updatePassword,
	forgotPasswordToken,
	resetPassword,
} = require("./user");

const {
	create,
	getOneProduct,
	gelAllProducts,
	update,
	deleteProduct,
	addToWishList,
	rating
} = require("./product");

const {
	createBlog,
	updateBlog,
	getBlog,
	getAllBlogs,
	deleteBlog,
	likeBlog,
	dislikeBlog,
} = require("./blog");

const {
	productCreateCategory,
	productUpdateCategory,
	productDeleteCategory,
	getCategory,
	getAllCategories,
} = require("./productCategory");
const {
	blogCreateCategory,
	blogDeleteCategory,
	blogUpdateCategory,
	blogGetCategory,
	blogGetAllCategories,
} = require("./blogCategory");

const {
	brandCreate,
	deleteBrand,
	updateBrand,
	getBrand,
	getAllBrands,
} = require("./brand");

module.exports = {
	signup,
	signin,
	getAllUsers,
	getUser,
	deleteUser,
	updateUser,
	blockUser,
	unBlockUser,
	refreshToken,
	logout,
	updatePassword,
	forgotPasswordToken,
	resetPassword,
	create,
	getOneProduct,
	gelAllProducts,
	update,
	deleteProduct,
	addToWishList,
	rating,
	createBlog,
	updateBlog,
	getBlog,
	getAllBlogs,
	deleteBlog,
	likeBlog,
	dislikeBlog,
	productCreateCategory,
	productUpdateCategory,
	productDeleteCategory,
	getCategory,
	getAllCategories,
	blogCreateCategory,
	blogDeleteCategory,
	blogUpdateCategory,
	blogGetCategory,
	blogGetAllCategories,
	brandCreate,
	deleteBrand,
	updateBrand,
	getBrand,
	getAllBrands,
};
