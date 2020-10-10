const mongoose = require("mongoose");

const Address = mongoose.model(
  "Address",
  new mongoose.Schema({
        name:  String,  
        mobile:  String,  
        alt_mobile:  String,  
        addressLine1:  String,  
        addressLine2:  String,  
        landmark:  String,  
        city:  String,  
        state:  String,  
        country:  String,  
        zipcode:  String,  
        status:  { type: Number, default: 1 },
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    },
    {
      timestamps: true 
    })
);

module.exports = Address;
