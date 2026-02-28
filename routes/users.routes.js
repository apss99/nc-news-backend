const express = require("express");
const {
  handleGetAllUsers,
  handleCreateUser,
  handleDeleteUser,
} = require("../controllers/users.controller");

const router = express.Router();
router.post("/", handleCreateUser);
router.get("/", handleGetAllUsers);
router.delete("/:username", handleDeleteUser);
module.exports = router;
