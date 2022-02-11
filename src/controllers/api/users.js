const {User} = require("../../models");

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		return res.status(200).json({
			success: true,
			data: users,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to get users",
			error: error.message,
		});
	}
};

const getUserById = async (req, res) => {
	try {
		const userId = req.params.id;

		const user = await User.findById(userId)
			.populate("thoughts")
			.populate("friends");

		return res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to get user",
			error: error.message,
		});
	}
};
const createUser = async (req, res) => {
	try {
		const user = req.body;
		const createdUser = await User.create(user);

		return res.status(200).json({
			success: true,
			data: createdUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to create User",
			error: error.message,
		});
	}
};
const updateUserById = (req, res) => {
	res.send("updateUserById");
};
const deleteUserById = (req, res) => {
	res.send("deleteUserById");
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUserById,
	deleteUserById,
};
