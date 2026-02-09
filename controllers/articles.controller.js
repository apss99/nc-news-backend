const {
  getAllArticles,
  getArticleById,
  getCommentsByArticle,
} = require("../services/articles.service");

exports.handleGetAllArticles = (req, res, next) => {
  getAllArticles().then((articles) => {
    res.status(200).send({ articles });
  });
};

exports.handleGetArticleById = (req, res, next) => {
  const { article_id } = req.params;
  getArticleById(article_id).then((article) => {
    res.status(200).send({ article });
  });
};

exports.handleGetCommentsByArticle = (req, res, next) => {
  const { article_id } = req.params;
  getCommentsByArticle(article_id).then((comments) => {
    res.status(200).send({ comments });
  });
};
