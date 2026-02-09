const {
  getAllArticles,
  getArticleById,
  getCommentsByArticle,
  postComment,
  changeVotes,
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

exports.handlePostComment = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;
  postComment(article_id, username, body).then((comment) => {
    res.status(201).send({ comment });
  });
};

exports.handleChangeVotes = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;
  changeVotes(article_id, inc_votes).then((article) => {
    res.status(200).send(article);
  });
};
