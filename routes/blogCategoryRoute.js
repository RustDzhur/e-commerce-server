const express = require ('express')
const router = express.Router()
const blogCategoryCtrl = require ('../controllers')
const {authMiddleware, isAdmin} = require("../middlewares");

router.post('/create', authMiddleware, isAdmin, blogCategoryCtrl.blogCreateCategory)
router.delete('/delete/:id', authMiddleware, isAdmin, blogCategoryCtrl.blogDeleteCategory)
router.put('/update/:id', authMiddleware, isAdmin, blogCategoryCtrl.blogUpdateCategory)
router.get('/get/:id', blogCategoryCtrl.blogGetCategory)
router.get('/getAll', blogCategoryCtrl.blogGetAllCategories)

module.exports = router