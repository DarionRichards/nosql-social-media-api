const {User} = require("../../models");

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		return res.status(200).json({
			success: true,
			data: users,
		});
	} catch (error) {
		return res.json({
			success: false,
			message: "Failed to get users",
			error: error.message,
		});
	}
};

const getUserById = (req, res) => {
	res.send("getUserById");
};
const createUser = (req, res) => {
	res.send("createUser");
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
