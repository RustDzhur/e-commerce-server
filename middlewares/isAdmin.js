const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const isAdmin = asyncHandler (async (req, res, next) => {
    const {id} = req.user
    const findUser = await User.findById(id)
    if(findUser.role !== 'admin') {
        res.status(200).json({message: "You are not an admin"})
    } else {
        next()
    }
})

module.exports = isAdmin