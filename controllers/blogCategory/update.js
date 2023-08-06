const Category = require ('../../models/blogCategoryModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const blogUpdateCategory = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId (id)
    try {
        const updateBlog = await Category.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updateBlog)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = blogUpdateCategory