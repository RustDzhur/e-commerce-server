const mongoose = require("mongoose");
const MONGO_DB = process.env.MONGO_DB;

const dbConnect = async () => {
	try {
		await mongoose.connect(MONGO_DB);
	} catch (error) {
		console.log("DB error");
	}
};

module.exports = { dbConnect };
