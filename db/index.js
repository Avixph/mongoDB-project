const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/employeesDatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Sucessfull Connection to MongoDB!!");
  })
  .catch((e) => {
    console.error("Connection Error!", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
