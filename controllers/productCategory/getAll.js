const Category = require ('../../models/productCategoryModel')
const asyncHandler = require ('express-async-handler')

const getAllCategories = asyncHandler (async (req, res) => {
    try {
        const getAllCategories = await Category.find()
        res.json(getAllCategories)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = getAllCategories