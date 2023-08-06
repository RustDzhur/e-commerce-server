const Brand = require ('../../models/brandModel')
const asyncHandler = require ('express-async-handler')


const getAllBrands = asyncHandler (async (req, res) => {
    try {
        const getAllBrand = await Brand.find()
        res.json(getAllBrand)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = getAllBrands