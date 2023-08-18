const Order = require("../../models/orderModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const getOrders = asyncHandler (async (req, res) => {
    const {_id} =req.user
    validationMongoDbId(_id)
    try {
        const userOrders = await Order.findOne({orderBy:  _id}).populate("products.product")
        res.json(userOrders)
    } catch (error) {
        throw new Error (error)
    }
})

module.exports = getOrders