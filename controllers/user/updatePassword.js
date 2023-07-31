const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const updatePassword = asyncHandler (async (req, res) => {
    const {_id} = req.user
    const {password} = req.body
    validationMongoDbId(_id)
    const user = await User.findById(_id)
    if (password) {
        user.password = password
        const updatePassword = await user.save()
        res.json(updatePassword)
    } else {
        res.json(user)
    }
})

module.exports = updatePassword