const { Router } = require("express");
const { addFriend, deleteFriendById } = require("../../controllers/api/friends");

const router = Router();

router.post("/", addFriend);
router.delete("/:id", deleteFriendById);

module.exports = router;