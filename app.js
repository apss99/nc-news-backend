const express = require("express");
const topicsRouter = require("./routes/topics.routes");
const articlesRouter = require("./routes/articles.routes");
const usersRouter = require("./routes/users.routes");
const commentsRouter = require("./routes/comments.routes");
const app = express();

app.use(express.json());

app.use("/api/topics", topicsRouter);

app.use("/api/articles", articlesRouter);

app.use("/api/users", usersRouter);

app.use("/api/comments", commentsRouter);

app.use((req, res) => {
  res.status(404).send({ msg: "Error 404: route not found" });
});

module.exports = app;
