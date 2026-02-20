const {
  fetchArticleById,
  fetchAllArticles,
  fetchCommentsByArticle,
  createComment,
  updateVotes,
} = require("../models/articles.model");

exports.getAllArticles = ({ sort_by, order, topic }) => {
  return fetchAllArticles({ sort_by, order, topic });
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

exports.changeVotes = (article_id, inc_votes) => {
  return updateVotes(article_id, inc_votes);
};
