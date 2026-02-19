const { deleteComment } = require("../services/comments.service");

exports.handleDeleteComment = (req, res, next) => {
  const { comment_id } = req.params;
  deleteComment(comment_id).then((deletedComment) => {
    res.status(200).send(deletedComment);
  });
};
