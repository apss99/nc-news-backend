const { getAllTopics } = require("../services/topics.service");

exports.handleGetAllTopics = (req, res, next) => {
  getAllTopics().then((topics) => {
    res.status(200).send({ topics });
  });
};
