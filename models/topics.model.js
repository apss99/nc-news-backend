const db = require("../db/connection");
const express = require("express");

exports.fetchAllTopics = () => {
  return db.query(`SELECT * FROM topics`).then(({ rows }) => rows);
};
