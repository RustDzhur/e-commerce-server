const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const saveUserAdress = asyncHandler (async (req, res, next) => {
    const { _id } = req.user
    validationMongoDbId(_id)
    try {
        
    } catch (error) {
        throw new Error (error)
    }
})

module.exports =saveUserAdress