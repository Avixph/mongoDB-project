const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: new Schema({
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    }),
  },
  { timestamps: true }
);

// const Address = new Schema({
//   street: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zip: { type: String, required: true },
// });

// const Employee = new Schema(
//   {
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     email: { type: String, required: true },
//     job_title: { type: String, required: true },
//     address: Address,
//   },
//   { timestamps: true }
// );

module.exports = mongoose.model("Employee", Employee);
