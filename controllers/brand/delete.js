const Brand = require ('../../models/brandModel')
const asyncHandler = require ('express-async-handler')
const validationMongoDbId = require('../../utils/validationMongoDbId')

const deleteBrand = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId (id)
    try {
        const deleteBrand = await Brand.findByIdAndDelete(id)
        res.json({message: "Success", deleted: deleteBrand})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports =deleteBrand