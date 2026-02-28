const db = require("../db/connection");

exports.fetchAllArticles = ({ sort_by, order, topic }) => {
  const validColumns = [
    "article_id",
    "title",
    "topic",
    "author",
    "body",
    "created_at",
    "votes",
    "article_img_url",
  ];
  const validOrderOptions = ["ASC", "DESC", "asc", "desc"];
  if (!validColumns.includes(sort_by) || !validOrderOptions.includes(order)) {
    return Promise.reject({ status: 400, msg: "Invalid sorting request" });
  }
  let queryString = `SELECT articles.*, 
  COUNT(comments.comment_id)::INT AS comment_count FROM articles
  LEFT JOIN comments ON comments.article_id = articles.article_id`;
  let queryValues = [];
  if (topic) {
    queryString += ` WHERE articles.topic = $1`;
    queryValues.push(topic);
  }
  queryString += ` GROUP BY articles.article_id ORDER BY ${sort_by} ${order}`;
  return db.query(queryString, queryValues).then(({ rows }) => rows);
};
//
exports.fetchArticleById = (article_id) => {
  return db
    .query(
      `SELECT articles.*,
      COUNT(comments.comment_id)::INT AS comment_count 
      FROM articles 
      LEFT JOIN comments 
      ON comments.article_id = articles.article_id
      WHERE articles.article_id = $1
      GROUP BY articles.article_id;`,
      [article_id],
    )
    .then(({ rows }) => rows[0]);
};

exports.fetchCommentsByArticle = (article_id) => {
  return db
    .query(
      `SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at ASC;`,
      [article_id],
    )
    .then(({ rows }) => rows);
};

exports.createComment = (article_id, username, body) => {
  return db
    .query(
      `INSERT INTO comments (article_id, author, body) VALUES ($1, $2, $3) RETURNING *;`,
      [article_id, username, body],
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

exports.updateVotes = (article_id, inc_votes) => {
  return db
    .query(
      `UPDATE articles SET votes = votes + $2 WHERE article_id = $1 RETURNING *;`,
      [article_id, inc_votes],
    )
    .then(({ rows }) => {
      return rows[0];
    });
};
