const User = require ('../models/userModel')
const jwt = require ('jsonwebtoken')
const asyncHandler = require ('express-async-handler')

const authMiddleware = asyncHandler (async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(' ')[1]
        try {
            if (token) {
                const decode = jwt.verify( token, process.env.SECRET)
                req.user = await User.findById(decode?.id) 
                next()
            } else {
                res.status(498).json({message: "Not authorized"})
            }
        } catch (error) {
            throw new Error ('Not authorized, token expired, Please Login again')
        }
    } else {
        throw new Error ("There is no token attached to header")
    }
})

module.exports = authMiddleware