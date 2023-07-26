const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')

const gelAllProducts = asyncHandler (async (req, res) => {
    try {
        const products = await Product.find()
        if (products) res.json(products)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = gelAllProducts