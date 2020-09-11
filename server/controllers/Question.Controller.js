const mongoose = require("mongoose");
const validator = require("email-validator");
const Question = require("../model/Question.model");
const Response = require("../model/Response.model");
const dbCode = 500;

const requestPerPage = 20;

function returnMessage(err) {
  var object = "";
  Object.keys(err.errors).map((key, position) => {
    object +=
      err.errors[key].message.replace("!", "") +
      (position == Object.keys(err.errors).length - 1 ? "!" : " and ");
  });
  return object;
}

module.exports = {
  getQuestions: async (req, res) => {
    try {
      var query = {};

      if (req.query.id) {
        query._id = req.query.id;
      }

      var filter = {
        limit: requestPerPage,
        skip: requestPerPage * req.query.page - requestPerPage,
        sort: {
          date: -1,
        },
      };
      const results = await Question.find(query, null, filter);
      res.status(200).json({ questions: results, ...Response(200, "Success") });
    } catch (error) {
      res.status(dbCode).json(Response(dbCode, error));
    }
  },
  insertQuestion: async (req, res) => {
    console.log("insertQuestion");
    const newQuestion = new Question(req.body);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(new Date().getDate() + 1);
    if (!validator.validate(newQuestion.email)) {
      throw res.status(500).json(Response(500, "Invalid email!"));
    } else if (newQuestion.date.getTime() < tomorrow.getTime()) {
      throw res.status(500).json(Response(500, "Invalid date!"));
    } else {
      try {
        const save = await newQuestion.save();
        res.json({ question: save, ...Response(200, "Success") });
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
