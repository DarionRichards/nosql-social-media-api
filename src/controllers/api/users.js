const {User, Thought} = require("../../models");

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});

		if (!users.length) {
			return res.status(404).json({
				success: false,
				message: "No user's exist in database",
			});
		} else {
			return res.status(200).json({
				success: true,
				data: users,
			});
		}
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

		if (!user.username) {
			return res.status(400).json({
				success: false,
				message: "No username supplied",
			});
		} else if (!user.email) {
			return res.status(400).json({
				success: false,
				message: "No email supplied",
			});
		} else {
			const createdUser = await User.updateOne(
				user,
				{$set: {username: user.username, email: user.email}},
				{upsert: true}
			);

			if (createdUser.matchedCount) {
				return res.status(409).json({
					success: false,
					message: "User already exists",
				});
			} else {
				return res.status(200).json({
					success: true,
					data: createdUser,
				});
			}
		}
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
		const {username, email} = req.body;

		if (!username) {
			return res.status(400).json({
				success: false,
				message: "No username supplied",
			});
		} else if (!email) {
			return res.status(400).json({
				success: false,
				message: "No email supplied",
			});
		} else {
			// Update user with their new details
			const oldUser = await User.findByIdAndUpdate(req.params.id, {
				username,
				email,
			});

			// Update thoughts associated with new stored username
			await Thought.updateMany(
				{username: oldUser.username},
				{username: username}
			);

			return res.status(200).json({
				success: true,
				message:
					"Successfully updated user and associated thoughts that belong.",
			});
		}
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
		const oldUser = await User.findByIdAndRemove(req.params.id);
		await Thought.deleteMany({username: oldUser.username});

		return res.status(200).json({
			success: true,
			message: `Successfully deleted user with id: ${req.params.id} and associated thoughts`,
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
