const signup = require("./signup");
const signin = require("./signin");
const getAllUsers = require ('./getAllUsers')
const getUser = require ('./getaUser')
const deleteUser = require('./deleteUser')
const updateUser = require ('./updateUser')

module.exports = { signup, signin, getAllUsers, getUser, deleteUser, updateUser };
