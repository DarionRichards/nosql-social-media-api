const { Router } = require("express");
const {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require("../../controllers/api/users");
const friends = require("./friends");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

router.use("/:id/friends", friends);

module.exports = router;