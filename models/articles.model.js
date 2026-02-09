const db = require("../db/connection");

exports.fetchAllArticles = () => {
  return db
    .query(
      `SELECT articles.*, 
    COUNT(comments.comment_id)::INT AS comment_count FROM articles 
    LEFT JOIN comments ON comments.article_id = articles.article_id 
    GROUP BY articles.article_id;`,
    )
    .then(({ rows }) => rows);
};

exports.fetchArticleById = (article_id) => {
  return db
    .query(`SELECT * FROM articles WHERE article_id = $1;`, [article_id])
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
