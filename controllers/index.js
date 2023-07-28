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
	logout
} = require("./user");

const {create, getOneProduct, gelAllProducts, update, deleteProduct} = require ('./product')

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
	create,
	getOneProduct,
	gelAllProducts,
	update,
	deleteProduct,
};
