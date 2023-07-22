const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		token: {
			type: String,
		},
		role: {
			type: String,
			enum: ["user", "business", "admin"],
			default: "user"
		},
		cart: {
			type: Array,
			default: []
		},
		address: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Address"
		}],
		wishlist: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product"
		}]
	},
	{ timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
