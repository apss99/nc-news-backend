const { getAllUsers, createUser } = require("../services/users.service");
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
    .hash(password, 10)
    .then((hashedPassword) => {
      return createUser(username, name, avatar_url, hashedPassword);
    })
    .then((user) => {
      delete user.password;
      res.status(201).send({ user });
    })
    .catch(next);
};
