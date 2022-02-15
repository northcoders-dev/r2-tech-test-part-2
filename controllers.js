const { selectRecipes, selectRecipeById, insertRecipe } = require("./models");
const { validatePostRequest } = require("./validation/requests");

exports.getRecipes = (req, res) => {
  const { exclude_ingredients } = req.query;
  selectRecipes(exclude_ingredients).then((recipes) => {
    res.status(200).send({ recipes });
  });
};

exports.getRecipeById = (req, res) => {
  const { id } = req.params;
  selectRecipeById(id).then((recipe) => {
    if (recipe === null) {
      res.status(404).send();
    } else {
      res.status(200).send({ recipe });
    }
  });
};

exports.addRecipe = (req, res) => {
  const { imageUrl, instructions, ingredients } = req.body;
  const isValidRequest = validatePostRequest({
    imageUrl,
    instructions,
    ingredients,
  });

  if (!isValidRequest) {
    res.status(400).send();
  } else {
    insertRecipe(imageUrl, instructions, ingredients).then((id) => {
      res.status(201).send({ id });
    });
  }
};
