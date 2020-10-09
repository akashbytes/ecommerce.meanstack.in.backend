const db = require("../models");
const SubCategory = db.subcategories;

// exports.allCategory = (req, res) => {
//     Category.find()
//     .then(category => {
//         res.send(category);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving category."
//         });
//     });
// };

exports.addSubCategory = (req, res) => {

    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Sub-Category name can not be empty"
        });
    }

    // Create a Note
    const subcategory = new SubCategory({
        name: req.body.name || "NA",
        categoryId: req.body.categoryId
    });

    // Save Note in the database
    subcategory.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sub-Category."
        });
    });

};

exports.getSubCategory = (req, res) => {
    SubCategory.findById(req.params.id)
    .then(subcategory => {
        if(!subcategory) {
            return res.status(404).send({
                message: "Sub-Category not found with id " + req.params.id
            });            
        }
        res.send(subcategory);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sub-Category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Sub-Category with id " + req.params.id
        });
    });
};

// exports.editCategory = (req, res) => {
//    // Validate Request
//    if(!req.body.name) {
//         return res.status(400).send({
//             message: "category name can not be empty"
//         });
//     }
//     // Find note and update it with the request body
//     Category.findByIdAndUpdate(req.params.id, {
//         name: req.body.name || "NA",
//     }, {new: true})
//     .then(category => {
//         if(!category) {
//             return res.status(404).send({
//                 message: "Category not found with id " + req.params.id
//             });
//         }
//         res.send(category);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Category not found with id " + req.params.id
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating category with id " + req.params.id
//         });
//     });
// };


// exports.deleteCategory = (req, res) => {
//     Category.findByIdAndRemove(req.params.id)
//     .then(category => {
//         if(!category) {
//             return res.status(404).send({
//                 message: "Category not found with id " + req.params.id
//             });
//         }
//         res.send({message: "Category deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Category not found with id " + req.params.id
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete category with id " + req.params.id
//         });
//     });
// };


