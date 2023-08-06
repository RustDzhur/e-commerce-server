const Category = require ('../../models/blogCategoryModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const blogGetCategory = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const getCategory = await Category.findById(id)
        res.json(getCategory)
    } catch (error) {
        throw new Error( error)
    }
})

module.exports = blogGetCategory