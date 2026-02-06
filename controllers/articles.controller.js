const { getAllArticles } = require("../services/articles.service");

exports.handleGetAllArticles = (req, res, next) => {
  getAllArticles().then((articles) => {
    res.status(200).send({ articles });
  });
};
