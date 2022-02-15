const { getRecipes, getRecipeById, addRecipe } = require("../controllers");

const apiRouter = require("express").Router();

apiRouter.get("/", (_, res) => {
  res.json({ message: "ok" });
});

apiRouter.get("/recipes", getRecipes);
apiRouter.get("/recipes/:id", getRecipeById);
apiRouter.post("/recipes", addRecipe);

module.exports = apiRouter;
