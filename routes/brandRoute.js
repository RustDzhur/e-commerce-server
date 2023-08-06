const express = require ('express')
const router = express.Router()
const brandCtrl = require ('../controllers')

const {authMiddleware, isAdmin} = require("../middlewares");

router.post('/create', authMiddleware, isAdmin, brandCtrl.brandCreate)
router.delete('/delete/:id', authMiddleware, isAdmin, brandCtrl.deleteBrand)
router.put('/update/:id', authMiddleware, isAdmin, brandCtrl.updateBrand)
router.get('/getBrand/:id', brandCtrl.getBrand)
router.get('/getAllBrands', brandCtrl.getAllBrands)


module.exports = router