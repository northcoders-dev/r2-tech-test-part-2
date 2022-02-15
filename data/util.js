const fsPromise = require("fs/promises");

exports.filterByIngredient = (recipes, exclude) => {
  if (exclude.length === 0) return recipes;

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeItems = recipe.ingredients.map((item) => item.name);
    if (!recipeItems.some((item) => exclude.indexOf(item) >= 0)) return recipe;
  });

  return filteredRecipes;
};

exports.resetData = () => {
  fsPromise.readFile(`${__dirname}/reset.json`, "utf8").then((res) => {
    fsPromise.writeFile(
      `${__dirname}/data.json`,
      JSON.stringify(JSON.parse(res), null, 4)
    );
  });
};
