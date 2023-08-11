const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBId = require("../../utils/validationMongoDbId");

const updateCoupon = asyncHandler (async (req, res) => {
    const {id} = req.params
    validateMongoDBId (id)
    try {
        const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {new: true})
        res.json({message: "Susccess", updated: updateCoupon})
    } catch (error) {
        throw new Error (error)
    }
})

module.exports =updateCoupon