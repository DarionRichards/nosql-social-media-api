const { Router } = require("express");
const {
    addReaction,
    deleteReactionById,
} = require("../../controllers/api/reactions");

const router = Router();

router.post("/", addReaction);
router.delete("/:id", deleteReactionById);

module.exports = router;