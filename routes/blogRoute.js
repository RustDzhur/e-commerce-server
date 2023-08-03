const express = require ('express')
const blogCtrl = require ('../controllers')
const router = express.Router()
const {authMiddleware, isAdmin} = require("../middlewares");


router.post('/create', authMiddleware, isAdmin, blogCtrl.createBlog)
router.put('/update/:id', authMiddleware, isAdmin, blogCtrl.updateBlog)
router.get('/getBlog/:id', blogCtrl.getBlog)
router.get('/getAllBlogs', blogCtrl.getAllBlogs)
router.delete('/delete/:id', authMiddleware, isAdmin, blogCtrl.deleteBlog)
router.put('/likeBlog', authMiddleware, blogCtrl.likeBlog)

module.exports = router