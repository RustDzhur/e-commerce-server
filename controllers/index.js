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

const {create} = require ('./product')

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
};
