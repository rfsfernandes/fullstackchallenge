const mongoose = require("mongoose");

require("dotenv").config();

module.exports = () => {
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Mongodb connected....");
    })
    .catch((err) => console.log(err.message));
};
