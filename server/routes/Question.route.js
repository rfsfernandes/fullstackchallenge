const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/Question.Controller");

router.get("/", QuestionController.getQuestions);

router.post("/", QuestionController.insertQuestion);

//Just to generate some dummy data
router.post("/generate", QuestionController.generateData);

module.exports = router;
