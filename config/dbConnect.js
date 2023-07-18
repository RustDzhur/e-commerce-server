const { default: mongoose } = require("mongoose");
require("dotenv").config();

const MONGO = process.env.MONGO_DB;

const dbConnect = async () => {
	try {
		await mongoose.connect(MONGO, {
			useNewUrlParser: "true",
			useUnifiedTopology: "true",
		});
		console.log("Successfull connected to DB MONGO");
	} catch (error) {
		console.log("Error with database:", error);
	}
};

module.exports = {
	dbConnect,
};