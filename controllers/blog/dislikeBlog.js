const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const dislikeBlog = asyncHandler(async (req, res) => {
	const { blogId } = req.body;
	validationMongoDbId(blogId);
	const blog = await Blog.findById(blogId);
	const loginUserId = req?.user?._id;
	const isDisliked = blog?.isDisliked;
	const alreadyLiked = blog?.likes?.find(
		(userId) => userId.toString() === loginUserId.toString()
	);
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: {likes: loginUserId},
            isLiked: false
        }, {new: true})
        res.json(blog)
    }
    if (isDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: {dislikes: loginUserId},
            isDisliked: false
        }, {new: true})
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: {dislikes: loginUserId},
            isDisliked: true
        }, {new: true})
        res.json(blog)
    }
});

module.exports = dislikeBlog;
