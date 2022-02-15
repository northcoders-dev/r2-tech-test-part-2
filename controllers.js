const { selectRecipes, selectRecipeById, insertRecipe } = require("./models");

exports.getRecipes = (req, res) => {
  const { exclude_ingredients } = req.query;
  selectRecipes(exclude_ingredients).then((recipes) => {
    res.status(200).send({ recipes });
  });
};

exports.getRecipeById = (req, res) => {
  const { id } = req.params;
  selectRecipeById(id).then((recipe) => res.status(200).send({ recipe }));
};

exports.addRecipe = (req, res) => {
  const { imageUrl, instructions, ingredients } = req.body;
  insertRecipe(imageUrl, instructions, ingredients).then((id) => {
    res.status(201).send({ id });
  });
};
