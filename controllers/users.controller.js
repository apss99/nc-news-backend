const { getAllUsers } = require("../services/users.service");

exports.handleGetAllUsers = (req, res, next) => {
  getAllUsers().then((users) => {
    res.status(200).send({ users });
  });
};
