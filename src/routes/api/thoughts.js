const { Router } = require("express");
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
} = require("../../controllers/api/thoughts");
const reactions = require("./reactions");

const router = Router();

router.get("/", getThoughts);
router.get("/:id", getThoughtById);
router.post("/", createThought);
router.put("/:id", updateThoughtById);
router.delete("/:id", deleteThoughtById);

router.use("/:id/reactions", reactions);

module.exports = router;