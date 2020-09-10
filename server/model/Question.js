const mongoose = require("mongoose");

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

module.exports = Question;