const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const getUser = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		validationMongoDbId(id)
		const user = await User.findById(id);
		const { createdAt, updatedAt, password, ...userData } = user.toObject();
		res.json(userData);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getUser;
