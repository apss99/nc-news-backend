const express = require("express");
const {
  handleMakeLoginAttempt,
} = require("../controllers/login.controller.js");

const router = express.Router();
router.post("/", handleMakeLoginAttempt);
module.exports = router;
