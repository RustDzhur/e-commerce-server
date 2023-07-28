const Product = require ('../../models/productModel')
const asyncHandler = require ('express-async-handler')
const slugify = require ('slugify')

const create = asyncHandler (async (req, res) => {
    if (req.body.title) {
        req.body.slug = slugify (req.body.title)
    }
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = create