const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const deleteUser = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);
        const {createdAt, updatedAt, password, ...userObj} = user.toObject()
		res.json({ message: `User sucsessfuly removed`, data: userObj });
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = deleteUser;
