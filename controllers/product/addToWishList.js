const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const addToWishList = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { prodId } = req.body;
	try {
		const user = await User.findById(_id)
		const alreadyAdded = user.wishlist.find(
			(id) => id.toString() === prodId
		);
		if (alreadyAdded) {
			let user = await User.findByIdAndUpdate(
				_id,
				{
					$pull: { wishlist: prodId },
				},
				{ new: true }
			).populate("wishlist");
			res.json(user);
		} else {
			let user = await User.findByIdAndUpdate(
				_id,
				{
					$push: { wishlist: prodId },
				},
				{ new: true }
			).populate("wishlist");
            res.json(user)
		}
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = addToWishList;
