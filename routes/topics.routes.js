const express = require("express");
const { handleGetAllTopics } = require("../controllers/topics.controller");
const app = require("../app");

const router = express.Router();
router.get("/", handleGetAllTopics);
module.exports = router;
