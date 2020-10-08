const { authJwt } = require("../middlewares");
const controller = require("../controllers/categories.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/categories/", [authJwt.verifyToken],controller.allCategory);
  app.post("/api/categories/add", [authJwt.verifyToken,authJwt.isAdmin], controller.addCategory);
  app.get("/api/categories/get/:id", [authJwt.verifyToken,authJwt.isAdmin],controller.getCategory);
  app.put("/api/categories/edit", [authJwt.verifyToken, authJwt.isAdmin],controller.editCategory);
  app.delete("/api/categories/delete/:id", [authJwt.verifyToken, authJwt.isAdmin],controller.deleteCategory);
};
