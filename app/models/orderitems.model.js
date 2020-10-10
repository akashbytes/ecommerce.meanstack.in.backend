const mongoose = require("mongoose");

const OrderItems = mongoose.model(
  "OrderItems",
  new mongoose.Schema({
        userId:  String,  
        productId:  String,  
        price:  { type: Number, default: 1 },
        orderId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Orders'
        },
    },
    {
      timestamps: true 
    })
);

module.exports = OrderItems;
