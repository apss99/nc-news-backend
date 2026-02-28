const { fetchUserByUsername } = require("../models/login.model");
const {
  fetchAllUsers,
  makeUser,
  removeUser,
} = require("../models/users.model");
const bcrypt = require("bcrypt");

exports.getAllUsers = () => {
  return fetchAllUsers();
};

exports.createUser = (username, hashedPassword, name, avatar_url) => {
  return makeUser(username, hashedPassword, name, avatar_url);
};

exports.deleteUser = (username, password) => {
  return fetchUserByUsername(username).then((user) => {
    if (!user) throw Error("invalid username");
    return bcrypt.compare(password, user.password).then((isPasswordValid) => {
      if (!isPasswordValid) throw new Error("Wrong password");
      return removeUser(username);
    });
  });
};
