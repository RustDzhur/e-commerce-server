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
};
