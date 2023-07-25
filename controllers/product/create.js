const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')

const create = asyncHandler (async (req, res) => {
    res.json({message: "Hey this is product route"})
})

module.exports = create