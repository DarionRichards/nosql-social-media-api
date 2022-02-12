const {User} = require("../../models");

const addFriend = async (req, res) => {
	try {
		const {userId, friendId} = req.params;

		const user = await User.findByIdAndUpdate(
			userId,
			{
				$push: {friends: friendId},
			},
			{
				new: true,
			}
		);

		return res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to add friend",
			error: error.message,
		});
	}
};
const deleteFriendById = async (req, res) => {
	try {
		const {userId, friendId} = req.params;

		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{
				$pull: {friends: friendId},
			},
			{
				new: true,
			}
		);

		return res.status(200).json({
			success: true,
			data: updatedUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Could not delete friend",
			error: error.message,
		});
	}
};

module.exports = {
	addFriend,
	deleteFriendById,
};
