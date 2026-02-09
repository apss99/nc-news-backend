const express = require("express");
const {
  handleGetAllArticles,
  handleGetArticleById,
  handleGetCommentsByArticle,
} = require("../controllers/articles.controller");
const app = require("../app");
const router = express.Router();

router.get("/", handleGetAllArticles);
router.get("/:article_id", handleGetArticleById);
router.get("/:article_id/comments", handleGetCommentsByArticle);
module.exports = router;
module.exports = router;
