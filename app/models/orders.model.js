const mongoose = require("mongoose");

const Orders = mongoose.model(
  "Orders",
  new mongoose.Schema({
    userId:  String, 
    price:  Number, 
    shippingCharge:  {type:Number, default:0}, 
    discount:  {type:Number, default:0}, 
    totalPrice:  {type:Number}, 
    orderItems:[{type: mongoose.Schema.Types.ObjectId,ref:'OrderItems'}]
    },{
    timestamps: true 
   })
);

module.exports = Orders;
