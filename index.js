const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const morgan = require ('morgan')
require("dotenv").config();
const userRouter = require("./routes/authRoute");
const productRouter = require ('./routes/productRoute')
const blogRouter = require ('./routes/blogRoute')
const productCategory = require ('./routes/productCategoryRoute')
const blogCategory = require ('./routes/blogCategoryRoute')
const brandRouter = require ('./routes/brandRoute')
const couponRouter = require ('./routes/couponRoute')

const app = express();

const PORT = process.env.PORT || 4000;

const { notFound, errorHandler } = require("./middlewares");

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use("/user/auth", userRouter);
app.use('/api', productRouter)
app.use('/api/blog', blogRouter)
app.use('/api/product-category', productCategory)
app.use('/api/blog-category', blogCategory)
app.use('/api/brand', brandRouter)
app.use('/api/coupon', couponRouter)

app.use(notFound)
app.use(errorHandler)

const MONGO = process.env.MONGO_DB;
mongoose.connect(MONGO).then(() => app.listen(PORT, () => console.log(`Server is runnning on PORT: ${PORT}`)))
