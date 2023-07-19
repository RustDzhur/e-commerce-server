const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const signin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	const id = user._id;
	if (user && (await user.isPasswordMatched(password))) {
        const { password, createdAt, updatedAt, ...userData } = user.toObject(); //._doc
		res.json({
			message: "Successfully loged in",
			data: {
				...userData,
				token: jwt.sign({ id }, secret, { expiresIn: "24h" }),
			},
		});
	} else {
		throw new Error("Invalid credentials");
	}
});

module.exports = signin;
