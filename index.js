const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const userAuth = require ('./routes/authRoute')

app.use("/", userAuth);

dbConnect().then(() => {
	app.listen(PORT, () => console.log(`Server is runnning on PORT: ${PORT}`));
	console.log("DB connected sucssesfully");
});

