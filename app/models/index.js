const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user            = require("./user.model");
db.role            = require("./role.model");
db.categories      = require("./categories.model");
db.subcategories   = require("./subcategories.model");
db.childcategories = require("./childcategories.model");
db.products        = require("./products.model");
db.cart            = require("./cart.model");
db.orers           = require("./orders.model");
db.orderitems      = require("./orderitems.model");
db.address         = require("./address.model");
db.review          = require("./reviews.model");


db.ROLES           = ["user", "admin", "moderator"];

module.exports = db;