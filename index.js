const express = require("express");
const bodyParser = require("body-parser");
const { dbConnect } = require("./config/dbConnect");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const userAuth = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user/auth", userAuth);

app.use(notFound)
app.use(errorHandler)

dbConnect().then(
	app.listen(PORT, () => console.log(`Server is runnning on PORT: ${PORT}`))
);
