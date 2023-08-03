const Blog = require ('../../models/blogModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const deleteBlog = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id)
        res.json({message: "Success", deleted_blog: deleteBlog})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = deleteBlog