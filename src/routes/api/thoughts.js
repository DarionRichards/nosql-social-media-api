const {Router} = require("express");
const {
	addReaction,
	deleteReactionById,
} = require("../../controllers/api/reactions");
const {
	getThoughts,
	getThoughtById,
	createThought,
	updateThoughtById,
	deleteThoughtById,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getThoughts);
router.get("/:id", getThoughtById);
router.post("/", createThought);
router.put("/:id", updateThoughtById);
router.delete("/:id", deleteThoughtById);

router.post("/:thoughtId/reactions", addReaction);
router.delete("/:thoughtId/reactions/:reactionId", deleteReactionById);

module.exports = router;
