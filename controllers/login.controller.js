const { makeLoginAttempt } = require("../services/login.service");

exports.handleMakeLoginAttempt = (req, res, next) => {
  const { username, password } = req.body;
  makeLoginAttempt(username, password).then((user) => {
    res.status(200).send(user);
  });
};
