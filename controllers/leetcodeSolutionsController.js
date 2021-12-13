const LeetCode = require("./../models/leetcodeSolutionsModel");
const factory = require("./handlerFactory");

// exports.setTourUserIds = (req, res, next) => {
//   // Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

exports.getAllQuestions = factory.getAll(LeetCode);
exports.getQuestion = factory.getOne(LeetCode);
exports.createQuestion = factory.createOne(LeetCode);
exports.updateQuestion = factory.updateOne(LeetCode);
exports.deleteQueeestion = factory.deleteOne(LeetCode);
