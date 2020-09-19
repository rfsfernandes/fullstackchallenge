const mongoose = require("mongoose");
const validator = require("email-validator");
const Question = require("../model/Question.model");
const Response = require("../model/Response.model");
const dbCode = 500;

const requestPerPage = 20;

function returnMessage(err) {
  let object = "";
  Object.keys(err.errors).map((key, position) => {
    object +=
      err.errors[key].message.replace("!", "") +
      (position == Object.keys(err.errors).length - 1 ? "!" : " and ");
  });
  return object;
}

module.exports = {
  getQuestions: async (req, res) => {

    if(req.query.page === "") {
      req.query.page = 1;
    }

    try {
      let query = {};

      if (req.query.id) {
        query._id = req.query.id;
      }

      let filter = {
        limit: requestPerPage,
        skip: requestPerPage * req.query.page - requestPerPage,
        sort: {
          date: -1,
        },
      };
      const results = await Question.find(query, null, filter);
      const pageCount = await Question.countDocuments();
      res.status(200).json({ questions: results, pageCount: (Math.ceil(pageCount / requestPerPage)), page: req.query.page, ...Response(200, "Success") });
    } catch (error) {
      res.status(dbCode).json(Response(dbCode, error));
    }
  },
  insertQuestion: async (req, res) => {
    const newQuestion = new Question(req.body);
    const today = new Date();
    const afterTomorrow = new Date();
    afterTomorrow.setDate(today.getDate() + 1);
    afterTomorrow.setHours(0);
    afterTomorrow.setMinutes(0);
    afterTomorrow.setMilliseconds(0);
    
    if (!validator.validate(newQuestion.email)) {
      throw res.status(500).json(Response(500, "Invalid email!"));
    } if (newQuestion.date.getTime() < afterTomorrow.getTime()) {
      throw res.status(500).json(Response(500, "Invalid date!"));
    } else {
      try {
        const save = await newQuestion.save();
        res.json({ question: save, ...Response(200, "Question successfully sent! Thank you!") });
      } catch (error) {
        res.status(dbCode).json(Response(dbCode, returnMessage(error)));
      }
    }
  },
  generateData: async (req, res) => {
    try {
      const questionsArray = [];
      for (let index = 0; index < 100; index++) {
        const tempQuestion = new Question({
          name: "Document " + index,
          email: "emailForDoc" + index + "@fullstackchallenge.com",
          observations:
            "Observations for document " +
            index +
            " for the fullstack challenge",
          date: new Date(),
        });

        questionsArray.push(tempQuestion);
      }

      const insert = await Question.insertMany(questionsArray);
      res
        .status(200)
        .json(
          Response(200, insert.length + " questions inserted with success.")
        );
    } catch (error) {
      res.status(dbCode).json(Response(dbCode, error.message));
    }
  },
};
