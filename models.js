const fsPromise = require("fs/promises");
const { filterByIngredient } = require("./data/util");

exports.selectRecipes = (exclude_ingredients) => {
  return fsPromise.readFile("./data/data.json", "utf8").then((res) => {
    const recipes = JSON.parse(res);
    if (!exclude_ingredients) return recipes;
    const exclude = exclude_ingredients.split(",");
    const filteredRecipes = filterByIngredient(recipes, exclude);
    return filteredRecipes;
  });
};

exports.selectRecipeById = (id) => {
  return fsPromise.readFile("./data/data.json", "utf8").then((res) => {
    const recipes = JSON.parse(res);
    const selectedRecipe = recipes.filter((recipe) => {
      return recipe.id === id;
    });
    return selectedRecipe[0] ?? null;
  });
};

exports.insertRecipe = (imageUrl, instructions, ingredients) => {
  return fsPromise
    .readFile("./data/data.json", "utf8")
    .then((res) => {
      const recipes = JSON.parse(res);
      return recipes;
    })
    .then((recipes) => {
      const ids = recipes.map((recipe) => {
        return Number(recipe.id.split("-")[1]);
      });
      const currentIds = ids.sort((a, b) => a - b);
      const newId = currentIds[currentIds.length - 1] + 1;
      const updatedRecipes = [
        ...recipes,
        { id: `recipe-${newId}`, imageUrl, instructions, ingredients },
      ];
      fsPromise.writeFile(
        "./data/data.json",
        JSON.stringify(updatedRecipes, null, 4)
      );
      return `recipe-${newId}`;
    });
};
