const addReaction = (req, res) => {
    res.send("addReaction");
};
const deleteReactionById = (req, res) => {
    res.send("deleteReactionById");
};

module.exports = {
    addReaction,
    deleteReactionById,
};