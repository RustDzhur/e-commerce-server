const signup = require("./signup");
const signin = require("./signin");
const getAllUsers = require("./getAllUsers");
const getUser = require("./getaUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");
const blockUser = require("./blockUser");
const unBlockUser = require("./unBlockUser");
const refreshToken = require ('./refreshToken')
const logout = require ('./logout')

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
	logout
};
