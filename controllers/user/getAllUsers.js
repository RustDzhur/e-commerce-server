const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find();
	try {
		if (users) {
			const usersWithoutTimestamps = users.map((user) => {
				const { createdAt, updatedAt, password, ...userData } =
					user.toObject();
				return userData;
			});
			res.json(usersWithoutTimestamps);
		}
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getAllUsers;
