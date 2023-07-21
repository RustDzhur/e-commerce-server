const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const updateUser = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(
			id,
			{
				firstname: req?.body?.firstname,
				lastname: req?.body?.lastname,
				mobile: req?.body?.mobile,
				email: req?.body?.email,
				password: req?.body?.password,
			},
			{ new: true }
		);
		const { password, createdAt, updatedAt, ...userData } = user.toObject();
		res.json({message: "Successfully updated", userData});
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = updateUser;
