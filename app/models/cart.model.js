const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId:  String, 
    productId:  String, 
    price:  String, 
    buyNow:  { type: Number, default: 0 }, 
    },
   {
    timestamps: true 
   })
);

module.exports = Cart;
