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
	rating,
	uploadImages,
} = require("./product");

const {
	createBlog,
	updateBlog,
	getBlog,
	getAllBlogs,
	deleteBlog,
	likeBlog,
	dislikeBlog,
	uploadImagesBlogs,
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

const {createCoupon, getAllCoupons, updateCoupon, deleteCoupon} = require('./coupon')

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
	uploadImages,
	createBlog,
	updateBlog,
	getBlog,
	getAllBlogs,
	deleteBlog,
	likeBlog,
	dislikeBlog,
	uploadImagesBlogs,
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
	createCoupon,
	getAllCoupons,
	updateCoupon,
	deleteCoupon
};
