const express = require("express");
const { handleGetAllUsers } = require("../controllers/users.controller");

const router = express.Router();
router.get("/", handleGetAllUsers);
module.exports = router;
