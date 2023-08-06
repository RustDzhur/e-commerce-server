const Brand = require ('../../models/brandModel')
const asyncHandler = require ('express-async-handler')

const brandCreate = asyncHandler (async (req, res) => {
    try {
        const brandCreate = await Brand.create(req.body)
        res.json(brandCreate)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = brandCreate