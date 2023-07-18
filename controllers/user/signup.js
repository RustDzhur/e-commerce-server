const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const signup = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		const newUser = await User.create(req.body);
		res.json({ message: newUser });
	} else {
		throw new Error("User already existed");
	}
});

module.exports = signup;
