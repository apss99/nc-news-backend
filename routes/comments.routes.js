const express = require("express");
const { handleDeleteComment } = require("../controllers/comments.controller");
const router = express.Router();

router.delete("/:comment_id", handleDeleteComment);

module.exports = router;
