const { removeComment } = require("../models/comments.model");

exports.deleteComment = (comment_id) => {
  return removeComment(comment_id);
};
