const { fetchUserByUsername } = require("../models/login.model");
const bcrypt = require("bcrypt");

exports.makeLoginAttempt = (username, password) => {
  return fetchUserByUsername(username).then((user) => {
    if (!user) throw Error("invalid username");
    return bcrypt.compare(password, user.password).then((isPasswordValid) => {
      if (!isPasswordValid) throw new Error("Invalid password");
      return {
        username: user.username,
        avatar_url: user.avatar_url,
        name: user.name,
      };
    });
  });
};
