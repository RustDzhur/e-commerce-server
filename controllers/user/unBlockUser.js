const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const unBlockUser = asyncHandler (async (req, res) => {
    const {id} = req.params
    validationMongoDbId(id)
    const user = await User.findByIdAndUpdate (id, {isBlocked: false}, {new: true})
    res.json(user)
})

module.exports = unBlockUser