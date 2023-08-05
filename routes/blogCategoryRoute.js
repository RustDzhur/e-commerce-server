const express = require ('express')
const router = express.Router()
const blogCategoryCtrl = require ('../controllers')
const {authMiddleware, isAdmin} = require("../middlewares");

router.post('/create', authMiddleware, isAdmin, blogCategoryCtrl.blogCreateCategory)

module.exports = router