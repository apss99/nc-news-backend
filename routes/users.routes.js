const express = require("express");
const {
  handleGetAllUsers,
  handleCreateUser,
} = require("../controllers/users.controller");

const router = express.Router();
router.post("/", handleCreateUser);
router.get("/", handleGetAllUsers);
module.exports = router;
