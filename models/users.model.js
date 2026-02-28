const db = require("../db/connection");

exports.fetchAllUsers = () => {
  return db
    .query(`SELECT * FROM users WHERE account_deleted = FALSE`)
    .then(({ rows }) => rows);
};

exports.makeUser = (username, hashedPassword, name, avatar_url) => {
  return db
    .query(
      `INSERT INTO users (username, password, name, avatar_url) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [username, hashedPassword, name, avatar_url],
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

exports.removeUser = (username) => {
  return db
    .query(
      `UPDATE users SET account_deleted = TRUE WHERE username = $1 RETURNING *;`,
      [username],
    )
    .then(({ rows }) => rows[0]);
};
