const db = require("../models");
const Category = db.categories;

exports.allCategory = (req, res) => {
    Category.find().populate('subcategories','name').exec()
    .then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving category."
        });
    });
};

exports.addCategory = (req, res) => {

    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Category name can not be empty"
        });
    }

    // Create a Note
    const category = new Category({
        name: req.body.name || "NA", 
    });

    // Save Note in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Category."
        });
    });

};

exports.getCategory = (req, res) => {
    Category.findById(req.params.id).populate('subcategories').exec()
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving category with id " + req.params.id
        });
    });
};

exports.editCategory = (req, res) => {
   // Validate Request
   if(!req.body.name) {
        return res.status(400).send({
            message: "category name can not be empty"
        });
    }
    // Find note and update it with the request body
    Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name || "NA",
    }, {new: true})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating category with id " + req.params.id
        });
    });
};


exports.deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });
        }
        res.send({message: "Category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete category with id " + req.params.id
        });
    });
};


