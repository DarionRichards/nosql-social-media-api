const {Thought, User} = require("../../models");

const getThoughts = async (req, res) => {
	try {
		const thoughts = await Thought.find({});
		return res.status(200).json({
			success: true,
			data: thoughts,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to get thoughts",
			error: error.message,
		});
	}
};

const getThoughtById = async (req, res) => {
	try {
		const thoughtId = req.params.id;

		const thought = await Thought.findById(thoughtId);

		return res.status(200).json({
			success: true,
			data: thought,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to get thought",
			error: error.message,
		});
	}
};
const createThought = async (req, res) => {
	try {
		const {thoughtText, username, userId} = req.body;
		const createdThought = await Thought.create({thoughtText, username});

		const user = await User.findById(userId);

		const newUserThoughts = user.thoughts.concat(createdThought._id);

		await User.findByIdAndUpdate(userId, {thoughts: newUserThoughts});

		return res.status(200).json({
			success: true,
			data: createdThought,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to create Thought",
			error: error.message,
		});
	}
};
const updateThoughtById = (req, res) => {
	res.send("updateThoughtById");
};
const deleteThoughtById = (req, res) => {
	res.send("deleteThoughtById");
};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought,
	updateThoughtById,
	deleteThoughtById,
};
