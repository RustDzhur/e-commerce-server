const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");

const resetPassword = asyncHandler(async (req, res) => {
	const { password } = req.body;
	const { token } = req.params;

	const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
	const user = await User.findOne({
		passwordResetToken: hashedToken,
		passwordResetExpires: { $gt: Date.now()} ,
	});
	if (!user) throw new Error("Token expired, please try again later");
	user.password = password;
	user.passwordResetToken = undefined;
	user.passwordResetExpires = undefined;
	await user.save();
	res.json(user);
});

module.exports = resetPassword;
