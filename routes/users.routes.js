const express = require("express");
const {
  handleGetAllUsers,
  handleCreateUser,
  handleGetUserByUsername,
} = require("../controllers/users.controller");

const router = express.Router();
router.post("/", handleCreateUser);
router.get("/", handleGetAllUsers);
router.get("/:username", handleGetUserByUsername);
module.exports = router;
