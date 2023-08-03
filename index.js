const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const morgan = require ('morgan')
require("dotenv").config();
const userRouter = require("./routes/authRoute");
const productRouter = require ('./routes/productRoute')
const blogRouter = require ('./routes/blogRoute')

const app = express();

const PORT = process.env.PORT || 4000;

const { notFound, errorHandler } = require("./middlewares");

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use("/user/auth", userRouter);
app.use('/api', productRouter)
app.use('/api', blogRouter)

app.use(notFound)
app.use(errorHandler)

const MONGO = process.env.MONGO_DB;
mongoose.connect(MONGO).then(() => app.listen(PORT, () => console.log(`Server is runnning on PORT: ${PORT}`)))
