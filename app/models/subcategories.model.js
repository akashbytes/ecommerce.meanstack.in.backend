const mongoose = require("mongoose");

const SubCategories = mongoose.model(
  "SubCategories",
  new mongoose.Schema({
        name:  String,  
        status:  { type: Number, default: 1 },
        categoryId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Categories'
        },
        childcategories : [{type: mongoose.Schema.Types.ObjectId,ref:'ChildCategories'}]
    },
    {
      timestamps: true 
    })
);

module.exports = SubCategories;
