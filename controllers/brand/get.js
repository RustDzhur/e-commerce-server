const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");
const validationMongoDbId = require("../../utils/validationMongoDbId");

const getBrand = asyncHandler(async (req, res) => {
	const { id } = req.params;
	validationMongoDbId(id);
	try {
		const getBrand = await Brand.findById(id);
		res.json(getBrand);
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = getBrand;
