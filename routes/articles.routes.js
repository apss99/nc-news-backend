const express = require("express");
const {
  handleGetAllArticles,
  handleGetArticleById,
  handleGetCommentsByArticle,
  handlePostComment,
  handleChangeVotes,
} = require("../controllers/articles.controller");
const router = express.Router();

router.get("/", handleGetAllArticles);
router.get("/:article_id", handleGetArticleById);
router.get("/:article_id/comments", handleGetCommentsByArticle);
router.post("/:article_id/comments", handlePostComment);
router.patch("/:article_id", handleChangeVotes);

module.exports = router;
module.exports = router;
