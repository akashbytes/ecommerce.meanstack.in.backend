const mongoose = require("mongoose");

const Categories = mongoose.model(
  "SubCategories",
  new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    status:  { type: Number, default: 1 },
    categoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories'
    }
  },{
    timestamps: true 
   })
);

module.exports = Categories;
