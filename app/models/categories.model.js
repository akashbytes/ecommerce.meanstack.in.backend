const mongoose = require("mongoose");

const Categories = mongoose.model(
  "Categories",
  new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    status:  { type: Number, default: 1 },
    subcategories : [{type: mongoose.Schema.Types.ObjectId,ref:'SubCategories'}]
    
     },
   {
    timestamps: true 
   })
);

module.exports = Categories;
