const db = require("../db/connection");

exports.fetchUserByUsername = (username) => {
  return db
    .query(
      "SELECT * FROM users WHERE username = $1 AND account_deleted = FALSE",
      [username],
    )
    .then(({ rows }) => rows[0]);
};
