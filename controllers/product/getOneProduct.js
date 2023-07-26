const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')

const getOneProduct = asyncHandler (async (req, res) => {
    const {id} = req.params
    const findProduct = await Product.findById(id)
    if (!findProduct) {
        throw new Error ('Not found')
    }
    res.json(findProduct)
})

module.exports = getOneProduct