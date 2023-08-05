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

const {productCreateCategory, productUpdateCategory, productDeleteCategory} = require ('./productCategory')
const {blogCreateCategory} = require ('./blogCategory')

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
	blogCreateCategory
};
