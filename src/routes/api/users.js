const {Router} = require("express");
const {
	getUsers,
	getUserById,
	createUser,
	updateUserById,
	deleteUserById,
} = require("../../controllers/api/users");
const {addFriend, deleteFriendById} = require("../../controllers/api/friends");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

router.post("/:userId/friends/:friendId", addFriend);
router.delete("/:userId/friends/:friendId", deleteFriendById);

module.exports = router;
