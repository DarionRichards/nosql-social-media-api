const getThoughts = (req, res) => {
    res.send("getThoughts");
};
const getThoughtById = (req, res) => {
    res.send("getThoughtById");
};
const createThought = (req, res) => {
    res.send("createThought");
};
const updateThoughtById = (req, res) => {
    res.send("updateThoughtById");
};
const deleteThoughtById = (req, res) => {
    res.send("deleteThoughtById");
};

module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
};