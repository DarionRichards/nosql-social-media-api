const {Thought, User} = require("../../models");

const getThoughts = async (req, res) => {
	try {
		const thoughts = await Thought.find({});

		if (!thoughts.length) {
			return res.status(404).json({
				success: false,
				message: "No thoughts exist in database",
			});
		} else {
			return res.status(200).json({
				success: true,
				data: thoughts,
			});
		}
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

		if (!thoughtText) {
			return res.status(400).json({
				success: false,
				message: "No thought text supplied in body",
			});
		} else if (!username) {
			return res.status(400).json({
				success: false,
				message: "No username supplied in body",
			});
		} else if (!userId) {
			return res.status(400).json({
				success: false,
				message: "No userId supplied in body",
			});
		} else {
			const createdThought = await Thought.create({thoughtText, username});

			await User.findByIdAndUpdate(
				userId,
				{
					$push: {thoughts: {...createdThought}},
				},
				{new: true}
			);

			return res.status(200).json({
				success: true,
				data: createdThought,
			});
		}
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to create Thought",
			error: error.message,
		});
	}
};

const updateThoughtById = async (req, res) => {
	try {
		const thoughtId = req.params.id;

		if (!req.body.thoughtText) {
			return res.status(400).json({
				success: false,
				message: "No thoughtText supplied in body",
			});
		} else {
			const updatedThought = await Thought.findByIdAndUpdate(
				thoughtId,
				{
					thoughtText: req.body.thoughtText,
				},
				{
					new: true,
				}
			);

			return res.status(200).json({
				success: true,
				message: `Successfully up thought with id: ${thoughtId}`,
				data: updatedThought,
			});
		}
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to update Thought",
			error: error.message,
		});
	}
};

const deleteThoughtById = async (req, res) => {
	try {
		const thoughtId = req.params.id;

		await Thought.findByIdAndDelete(thoughtId);

		return res.status(200).json({
			success: true,
			message: `Successfully deleted thought with id: ${thoughtId}`,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: `Failed to delete thought`,
			error: error.message,
		});
	}
};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought,
	updateThoughtById,
	deleteThoughtById,
};
