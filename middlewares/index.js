const authMiddleware = require ('./authMiddleware')
const {errorHandler, notFound} = require ('./errorHandler')
const isAdmin = require ('./isAdmin')

module.exports = {authMiddleware, errorHandler, notFound, isAdmin}