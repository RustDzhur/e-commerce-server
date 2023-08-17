const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const emptyCart = asyncHandler (async(req, res) => {
    const {_id} = req.user
    validationMongoDbId(_id)
    try {
        const user = await User.findOne({_id})
        const cart = await Cart.findOneAndRemove({orderBy: user._id})
        res.json(cart)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = emptyCart