const express = require ("express")
const router = express.Router()
const productCrtl = require ('../controllers')

router.post ('/create', productCrtl.create)
router.get ('/:id', productCrtl.getOneProduct)
router.get ('/', productCrtl.gelAllProducts)

module.exports = router