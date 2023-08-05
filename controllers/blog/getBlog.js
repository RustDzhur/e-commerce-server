const Blog = require ('../../models/blogModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const getBlog = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const getBlog = await Blog.findById(id).populate('likes dislikes')
        await Blog.findByIdAndUpdate(id, {
            $inc: {numViews: 1}
        }, {new: true})
        res.json(getBlog)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = getBlog