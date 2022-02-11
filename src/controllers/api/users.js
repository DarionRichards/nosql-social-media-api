const {User, Thought} = require("../../models");

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

const updateUserById = async (req, res) => {
	try {
		const userId = req.params.id;

		// Get the currently stored username
		const user = await User.findById(userId);

		// Update thoughts associated with currently stored username (before update) and update with new username
		await Thought.updateMany(
			{username: user.username},
			{username: req.body.username}
		);

		// Update user with their new details
		const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
			new: true,
		});

		return res.status(200).json({
			success: true,
			data: updatedUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to update user",
			error: error.message,
		});
	}
};
const deleteUserById = async (req, res) => {
	try {
		const userId = req.params.id;

		const user = await User.findById(userId);

		// Return an array of ID's as a string to delete
		const userThoughtsArray = user.thoughts.map((thoughtId) =>
			thoughtId.toString()
		);

		// Delete ALL associated thoughts by ID
		await Thought.deleteMany({
			_id: {
				$in: userThoughtsArray,
			},
		});

		// Delete a user by id
		await User.deleteOne({_id: userId});

		return res.status(200).json({
			success: true,
			message: `Successfully deleted user with id: ${userId} and associated thoughts`,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to delete User",
			error: error.message,
		});
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUserById,
	deleteUserById,
};
