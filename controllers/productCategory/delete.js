const Category = require ('../../models/productCategoryModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const productDeleteCategory = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    try {
        const deleteCategory = await Category.findByIdAndDelete(id)
        res.json({message: "Success", deleteCategory})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = productDeleteCategory