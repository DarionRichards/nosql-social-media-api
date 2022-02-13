const {Thought} = require("../../models");

const addReaction = async (req, res) => {
	try {
		const {thoughtId} = req.params;

		if (!req.body.reactionBody) {
			return res.status(400).json({
				success: false,
				message: "No reactionBody supplied supplied is body",
			});
		} else if (!req.body.username) {
			return res.status(400).json({
				success: false,
				message: "No username supplied in body",
			});
		} else {
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
		}
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

		await Thought.findByIdAndUpdate(thoughtId, {
			$pull: {reactions: {reactionId: reactionId}},
		});

		return res.status(200).json({
			success: true,
			message: "Deleted reaction successfully",
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
