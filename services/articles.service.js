const {
  fetchArticleById,
  fetchAllArticles,
  fetchCommentsByArticle,
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
