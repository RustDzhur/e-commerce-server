const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBId = require("../../utils/validationMongoDbId");

const deleteCoupon = asyncHandler (async (req, res) => {
    const {id} = req.params
    validateMongoDBId (id)
    try {
        const deleteCoupon = await Coupon.findByIdAndDelete(id)
        res.json({message: "Success", deleted: deleteCoupon})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = deleteCoupon