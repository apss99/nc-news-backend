const {
  getAllUsers,
  createUser,
  deleteUser,
} = require("../services/users.service");
const bcrypt = require("bcrypt");

exports.handleGetAllUsers = (req, res, next) => {
  getAllUsers().then((users) => {
    res.status(200).send({ users });
  });
};

exports.handleCreateUser = (req, res, next) => {
  const {
    username,
    password,
    name,
    avatar_url = "https://t4.ftcdn.net/jpg/07/03/86/11/360_F_703861114_7YxIPnoH8NfmbyEffOziaXy0EO1NpRHD.jpg",
  } = req.body;
  bcrypt
    .hash(password, 4)
    .then((hashedPassword) => {
      return createUser(username, hashedPassword, name, avatar_url);
    })
    .then((user) => {
      delete user.password;
      res.status(201).send({ user });
    })
    .catch(next);
};

exports.handleDeleteUser = (req, res, next) => {
  const { username, password } = req.body;
  deleteUser(username, password).then((deletedUser) => {
    res.status(200).send(deletedUser);
  });
};
