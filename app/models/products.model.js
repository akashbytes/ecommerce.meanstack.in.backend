const mongoose = require("mongoose");

const Products = mongoose.model(
  "Products",
  new mongoose.Schema({
    title:         String, 
    mrp:           Number, 
    price:         Number, 
    description:   String, 
    image:         String, 
    gallary_image: [String], 
    status:        { type: Number, default: 1 },
    new_arrival:   { type: Number, default: 1 },
    featured:      { type: Number, default: 0 },
    hot_deals:     { type: Number, default: 0 },
    categoryId :  {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories'
    },
    subcategoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCategories'
    },
    childcategoryId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ChildCategories'
    },
    
    
  },{
    timestamps: true 
   })
);

module.exports = Products;
