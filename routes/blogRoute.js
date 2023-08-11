const express = require ('express')
const blogCtrl = require ('../controllers')
const router = express.Router()
const {authMiddleware, isAdmin} = require("../middlewares");
const {
	uploadPhoto,
	blogImgResize,
} = require("../middlewares/uploadImages");

router.post('/create', authMiddleware, isAdmin, blogCtrl.createBlog)
router.put('/update/:id', authMiddleware, isAdmin, blogCtrl.updateBlog)
router.put(
	"/upload/:id",
	authMiddleware,
	isAdmin,
	uploadPhoto.array("images", 10),
	blogImgResize,
	blogCtrl.uploadImagesBlogs
);
router.get('/getBlog/:id', blogCtrl.getBlog)
router.get('/getAllBlogs', blogCtrl.getAllBlogs)
router.delete('/delete/:id', authMiddleware, isAdmin, blogCtrl.deleteBlog)
router.put('/likeBlog', authMiddleware, blogCtrl.likeBlog)
router.put('/dislikeBlog', authMiddleware, blogCtrl.dislikeBlog)

module.exports = router