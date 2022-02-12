const {Thought} = require("../../models");

const addReaction = async (req, res) => {
	try {
		const {thoughtId} = req.params;

		const {reactions} = await Thought.findByIdAndUpdate(
			thoughtId.trim(),
			{
				$push: {reactions: {...req.body}},
			},
			{new: true}
		);

		return res.status(200).json({
			success: true,
			data: reactions,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Could not add reaction",
			error: error.message,
		});
	}
};

const deleteReactionById = async (req, res) => {
	try {
		const {thoughtId, reactionId} = req.params;

		const {reactions} = await Thought.findByIdAndUpdate(thoughtId, {
			$pull: {reactions: {reactionId: reactionId}},
		});

		return res.status(200).json({
			success: true,
			data: reactions,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Could not delete reaction",
			error: error.message,
		});
	}
};

module.exports = {
	addReaction,
	deleteReactionById,
};
