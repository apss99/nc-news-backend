const express = require("express");
const {
  handleGetAllArticles,
  handleGetArticleById,
} = require("../controllers/articles.controller");
const app = require("../app");
const router = express.Router();

router.get("/", handleGetAllArticles);
router.get("/:article_id", handleGetArticleById);
module.exports = router;
