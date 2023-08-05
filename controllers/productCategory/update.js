const Category = require ('../../models/productCategoryModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const productUpdateCategory = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updateCategory)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = productUpdateCategory