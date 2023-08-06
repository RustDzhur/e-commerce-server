const Category = require ('../../models/blogCategoryModel')
const asyncHandler = require ('express-async-handler')


const blogGetAllCategories = asyncHandler (async (req, res) => {
    try {
        const getAllCategories = await Category.find()
        res.json(getAllCategories)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = blogGetAllCategories