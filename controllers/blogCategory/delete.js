const Category = require ('../../models/blogCategoryModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const blogDeleteCategory = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const deleteBlog = await Category.findByIdAndDelete(id)
        res.json({message: "Success", deleted: deleteBlog})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports =blogDeleteCategory