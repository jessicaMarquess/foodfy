const express = require('express');
const routes = express.Router();
const recipes = require("./data/data");
const recipe = require("./controllers/recipes");

routes.get("/", function(req, res){
    return res.render("index", {items: recipes});
});
routes.get("/about-us", function(req, res){
    return res.render("about-us");
});
routes.get("/recipes", function(req,res){
    return res.render("recipes", {items: recipes});
});
routes.get('/recipe/:index', function (req, res) {
    const index = req.params.index
    const item = recipes[index]
    if (!item) {
        res.status(404).render("not-found");
    }
    return res.render('recipe', { item })
});

routes.get("/admin/recipes", recipe.index);
routes.get("/admin/recipes/create", recipe.create);
routes.get("/admin/recipes/:index", recipe.show);
routes.get("/admin/recipes/:index/edit", recipe.edit);
// routes.post("/admin/recipes", recipe.post);
// routes.put("/admin/recipes", recipe.put);
// routes.delete("/admin/recipes", recipe.delete);

module.exports = routes;