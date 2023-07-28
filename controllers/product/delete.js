const Product = require ('../../models/productModel')
const asynchandler = require ('express-async-handler')

const deleteProduct = asynchandler (async (req, res) => {
    const {id} = req.params
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json({message: "Successfully deleted", data: deleteProduct})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = deleteProduct