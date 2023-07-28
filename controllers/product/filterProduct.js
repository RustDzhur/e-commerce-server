const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')

const filterProduct = asyncHandler (async (req, res) => {
    res.json({message: "FILTER"})
})

module.exports = filterProduct