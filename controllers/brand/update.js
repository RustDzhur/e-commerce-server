const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const updateBrand = asyncHandler(async (req, res) => {
	const { id } = req.params;
	validationMongoDbId(id);
	try {
		const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updateBrand);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = updateBrand;
