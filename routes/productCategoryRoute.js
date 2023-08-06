const express = require ('express')
const router = express.Router()
const productCategoryCtrl = require ('../controllers')
const {authMiddleware, isAdmin} = require("../middlewares");

router.post('/create', authMiddleware, isAdmin, productCategoryCtrl.productCreateCategory)
router.put('/update/:id', authMiddleware, isAdmin, productCategoryCtrl.productUpdateCategory)
router.delete('/delete/:id', authMiddleware, isAdmin, productCategoryCtrl.productDeleteCategory)
router.get('/get/:id', productCategoryCtrl.getCategory)
router.get('/getAll', productCategoryCtrl.getAllCategories)

module.exports = router