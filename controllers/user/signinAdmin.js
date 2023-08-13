const generateRefreshToken = require("../../config/refreshToken");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const signin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	const id = user._id;
	if (user.isBlocked === true) {
		res.status(403).json({
			message: "Your account blocked, please contact support",
		});
	}

	if (user && (await user.isPasswordMatched(password))) {
		const { password, createdAt, updatedAt, ...userData } = user.toObject(); //._doc
		const refreshToken = await generateRefreshToken(id);
		const updateUser = await User.findByIdAndUpdate(
			id,
			{ refreshToken },
			{ new: true }
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			maxAge: 48 * 60 * 60 * 1000,
		});
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
