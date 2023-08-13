const signup = require("./signup");
const signinUser = require("./signinUser");
const signinAdmin = require("./signinAdmin");
const getAllUsers = require("./getAllUsers");
const getUser = require("./getaUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");
const blockUser = require("./blockUser");
const unBlockUser = require("./unBlockUser");
const refreshToken = require ('./refreshToken')
const logout = require ('./logout')
const updatePassword = require ('./updatePassword')
const forgotPasswordToken = require ('./forgotPassword')
const resetPassword = require ('./resetPassword')

module.exports = {
	signup,
	signinUser,
	signinAdmin,
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
	resetPassword
};
