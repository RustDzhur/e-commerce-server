const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require ('../../utils/validationMongoDbId')

const blockUser = asyncHandler (async (req,res) => {
    const {id} = req.params
    validationMongoDbId(id)
    const user = await User.findByIdAndUpdate(id, {isBlocked: true}, {new:true})
    res.json(user)
})

module.exports = blockUser