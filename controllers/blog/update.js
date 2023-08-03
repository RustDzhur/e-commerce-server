const Blog = require ('../../models/blogModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const updateBlog = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const update = await Blog.findByIdAndUpdate(id, req.body, {new: true})
        res.json({update})
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = updateBlog