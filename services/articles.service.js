const {
  fetchArticleById,
  fetchAllArticles,
  fetchCommentsByArticle,
  createComment,
} = require("../models/articles.model");

exports.getAllArticles = () => {
  return fetchAllArticles();
};

exports.getArticleById = (article_id) => {
  return fetchArticleById(article_id);
};

exports.getCommentsByArticle = (article_id) => {
  return fetchCommentsByArticle(article_id);
};

exports.postComment = (article_id, username, body) => {
  return createComment(article_id, username, body);
};
