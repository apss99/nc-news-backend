const db = require("../db/connection");

exports.fetchUserByUsername = (username) => {
  return db
    .query("SELECT * FROM users WHERE username = $1", [username])
    .then(({ rows }) => rows[0]);
};
