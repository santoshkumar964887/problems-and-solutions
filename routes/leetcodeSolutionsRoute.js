const express = require("express");
const leetCodeContrroller = require("./../controllers/leetcodeSolutionsController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(leetCodeContrroller.getAllQuestions)
  .post(leetCodeContrroller.createQuestion);

router
  .route("/:id")
  .get(leetCodeContrroller.getQuestion)
  .patch(leetCodeContrroller.updateQuestion)
  .delete(leetCodeContrroller.deleteQueeestion);

module.exports = router;
