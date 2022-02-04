const getUsers = (req, res) => {
    res.send("getUsers");
};
const getUserById = (req, res) => {
    res.send("getUserById");
};
const createUser = (req, res) => {
    res.send("createUser");
};
const updateUserById = (req, res) => {
    res.send("updateUserById");
};
const deleteUserById = (req, res) => {
    res.send("deleteUserById");
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
};