const express = require ("express")
const router = express.Router()
const productCrtl = require ('../controllers')

router.post ('/create', productCrtl.create)

module.exports = router