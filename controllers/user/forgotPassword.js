const sendEmail = require("../../middlewares/email");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const BASE_URL = process.env.BASE_URL; //http://localhost:3000

const forgotPasswordToken = asyncHandler(async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) throw new Error("The user not found with this email");
	try {
		const token = await user.createPasswordResetToken();
		await user.save();
		const resetURL = `Please follow this link to reset your password. This link is valid 10 minuts from now. <a href="${BASE_URL}/user/auth/reset-password/${token}">Link<a/>`;
		const data = {
			to: email,
			subject: "Reset Password",
			text: "Please follow this link to reset your password",
			html: resetURL,
		};
		await sendEmail(data);
		res.json({ message: "Verification email sent", token });
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = forgotPasswordToken;
