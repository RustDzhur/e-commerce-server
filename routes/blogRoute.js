const express = require ('express')
const blogCtrl = require ('../controllers')
const router = express.Router()

router.post('/blog/create', blogCtrl.createBlog)

module.exports = router