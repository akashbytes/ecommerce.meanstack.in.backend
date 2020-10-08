const mongoose = require("mongoose");

const Role = mongoose.model(
  "Categories",
  new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    status:  { type: Number, default: 1 },
  })
);

module.exports = Role;
