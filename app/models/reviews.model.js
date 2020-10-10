const mongoose = require("mongoose");

const Review = mongoose.model(
  "Review",
  new mongoose.Schema({
        rating:  { type: Number, default: 1 },  
        description:  String,  
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        productId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        status:  { type: Number, default: 1 },
    },
    {
      timestamps: true 
    })
);

module.exports = Review;
