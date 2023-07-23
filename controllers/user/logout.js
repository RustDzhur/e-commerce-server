const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const logout = asyncHandler (async (req, res) => {
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error ("No refresh token in Cookies")
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken})
    if (!user) {
        res.clearCookie ("refreshToken", {
            httpOnly: true,
            secure: true
        })
        return res.sendStatus(204)
    }
    await User.findOneAndUpdate({refreshToken}, {refreshToken: ""})
    res.clearCookie ("refreshToken", {
        httpOnly: true,
        secure: true
    })
    return res.sendStatus(204)
})

module.exports = logout