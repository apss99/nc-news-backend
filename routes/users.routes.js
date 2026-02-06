const express = require("express");
const { handleGetAllUsers } = require("../controllers/users.controller");
const app = require("../app");

const router = express.Router();
router.get("/", handleGetAllUsers);
module.exports = router;
