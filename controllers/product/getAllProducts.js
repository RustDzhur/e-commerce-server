const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')

const gelAllProducts = asyncHandler (async (req, res) => {
    try {
        const queryObj = {...req.query}
        const excludeFields = ["page", "sort", "limit", "fields"]
        excludeFields.forEach (el => delete queryObj[el])

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        const query = Product.find(JSON.parse(queryStr))
        const product = await query
        res.json(product)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = gelAllProducts