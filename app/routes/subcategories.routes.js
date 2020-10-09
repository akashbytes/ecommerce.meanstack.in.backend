const { authJwt } = require("../middlewares");
const controller = require("../controllers/subcategories.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/subcategories/", [authJwt.verifyToken],controller.allSubCategory);
  app.post("/api/subcategories/add", [authJwt.verifyToken,authJwt.isAdmin], controller.addSubCategory);
  app.get("/api/subcategories/get/:id", [authJwt.verifyToken,authJwt.isAdmin],controller.getSubCategory);
//   app.put("/api/subcategories/edit", [authJwt.verifyToken, authJwt.isAdmin],controller.editCategory);
//   app.delete("/api/subcategories/delete/:id", [authJwt.verifyToken, authJwt.isAdmin],controller.deleteCategory);
};
