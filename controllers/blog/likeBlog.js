const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const likeBlog = asyncHandler(async (req, res) => {
	const { blogId } = req.body;

	validationMongoDbId(blogId);
	const blog = await Blog.findById(blogId);
	const loginUserId = req?.user?._id;
	const isLiked = blog?.isLiked;
	const alreadyDisliked = blog?.dislikes?.find(
		(userId => userId?.toString() === loginUserId?.toString())
	);
	if (alreadyDisliked) {
		const blog = await Blog.findByIdAndUpdate(blogId, {
			$pull: { dislikes: loginUserId },
			isDisliked: false,
		}, {new: true})
        res.json(blog);
	}
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
			$pull: { likes: loginUserId },
			isLiked: false,
		}, {new: true})
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
			$push: { likes: loginUserId },
			isLiked: true,
		}, {new: true})
        res.json(blog);
    }
});

module.exports = likeBlog;
