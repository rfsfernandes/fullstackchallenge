//import Question from "./model/Question.js"

require("dotenv").config();
const Response = require("./model/Response");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const validator = require("email-validator");
const dbCode = 500;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    obs: String,
    date: {
        type: Number,
        required: [true, 'Date is required!']
    }
});

const Question = new mongoose.model("Question", questionSchema);

mongoose.connect("mongodb+srv://rodrigo:testechallenge@fullstackchallenge.40uww.mongodb.net/questionsdb", {
    useNewUrlParser: true
});

app.get("/question", function (req, res ) {
    Question.find(function(err, results){
        console.log(err, results);
        res.json({results, ...Response(200, "Success")});
    });
});

app.post("/question", function ( req, res ) {
    //const newQuestion = new Question(body);
    const newQuestion = new Question(req.body);
    
    if(!validator.validate(req.body.email)){
        res.status(500).json(Response(500, "Invalid email!"));
    } else {
        newQuestion.save(function(err, question) {
            if(err){
                res.status(dbCode).json(Response(dbCode, returnMessage(err)));
            } else {
                res.json({question, ...Response(200, "Success")});
            }

        });
    }

});

function returnMessage(err){
    var object = "";
    Object.keys(err.errors).map((key, position) => {
        object += err.errors[key].message.replace("!", "") + (position == Object.keys(err.errors).length - 1 ? "!" : " and ");
    });
    return object;
}

let port = process.env.PORT;

if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started successfully at" + port);
});
