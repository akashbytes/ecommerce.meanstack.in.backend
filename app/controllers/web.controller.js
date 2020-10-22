const db = require("../models");
const Category = db.categories;

exports.allCategory = (req, res) => {
    Category
    .find().
    populate('subcategories','name-_id').
    exec()
    .then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving category."
        });
    });

};
