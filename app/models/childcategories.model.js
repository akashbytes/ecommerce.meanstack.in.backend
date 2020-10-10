const mongoose = require("mongoose");

const ChildCategories = mongoose.model(
  "ChildCategories",
  new mongoose.Schema({
    name:  String,  
    status:  { type: Number, default: 1 },
    subcategoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCategories'
    }
  },{
    timestamps: true 
   })
);

module.exports = ChildCategories;
