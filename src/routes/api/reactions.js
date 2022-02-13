const {Router} = require("express");
const {
	addReaction,
	deleteReactionById,
} = require("../../controllers/api/reactions");

const router = Router();

router.post("/", addReaction);
router.delete("/:reactionId", deleteReactionById);

module.exports = router;
