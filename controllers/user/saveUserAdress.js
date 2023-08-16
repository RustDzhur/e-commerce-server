const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const saveUserAddress = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const { address } = req.body;
	validationMongoDbId(_id);
	try {
		const addressUpdate = await User.findByIdAndUpdate(
			_id,
			{
				address,
			},
			{ new: true }
		);
		res.json(addressUpdate);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = saveUserAddress;
