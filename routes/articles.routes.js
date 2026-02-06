const express = require("express");
const { handleGetAllArticles } = require("../controllers/articles.controller");
const app = require("../app");

const router = express.Router();
router.get("/", handleGetAllArticles);
module.exports = router;
