const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require ('jsonwebtoken')
const SECRET = process.env.SECRET

const refreshToken = asyncHandler (async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error ("No refresh token in Cookies")
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken})
    if(!user) throw new Error ("No Refresh token in DB or not matched")
    const id = user.id
    jwt.verify(refreshToken, SECRET, ((err, decoded) => {
        if(err || user.id !== decoded.id) {
            throw new Error ("There is some problem with refresh token")
        }
        const accessToken = jwt.sign({ id }, SECRET, { expiresIn: "24h" })
        res.json({accessToken});
    }))
})

module.exports = refreshToken