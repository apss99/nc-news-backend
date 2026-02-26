const { fetchAllUsers, makeUser } = require("../models/users.model");

exports.getAllUsers = () => {
  return fetchAllUsers();
};

exports.createUser = (username, hashedPassword, name, avatar_url) => {
  return makeUser(username, hashedPassword, name, avatar_url);
};
