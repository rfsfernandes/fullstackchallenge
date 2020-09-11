//import Question from "./model/Question.js"

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./initDB")();


const ProductRoute = require("./routes/Question.route");
app.use("/question", ProductRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started successfully at " + port);
});
