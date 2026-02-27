const express = require("express");
const { handleMakeLoginAttempt } = require("../controllers/login.controller");

const router = express.Router();
router.post("/", handleMakeLoginAttempt);
module.exports = router;
