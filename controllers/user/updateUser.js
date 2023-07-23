const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const updateUser = asyncHandler(async (req, res) => {
	const { firstname, lastname, mobile, email, password } = req?.body || {};
	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const updatedUserData = {
			firstname,
			lastname,
			mobile,
			email,
			password: hashedPassword,
		};
		const { id } = req.user;
		validationMongoDbId(id)
		const user = await User.findByIdAndUpdate(id, updatedUserData, {
			new: true,
		});
		const { password, createdAt, updatedAt, ...userData } = user.toObject();
		res.json({ message: "Successfully updated", userData });
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = updateUser;
