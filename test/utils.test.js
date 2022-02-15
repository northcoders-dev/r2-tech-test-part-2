const { filterByIngredient } = require("../data/util");

describe("filterByIngredient", () => {
  test("should return unchanged object if passed empty filter array", () => {
    const recipes = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    const exclude = [];
    const actual = filterByIngredient(recipes, exclude);
    const expected = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    expect(actual).toEqual(expected);
  });
  test("should return recipes if it does not include an excluded ingredient", () => {
    const recipes = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    const exclude = ["banana"];
    const actual = filterByIngredient(recipes, exclude);
    const expected = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    expect(actual).toEqual(expected);
  });
  test("should not return recipes if it includes an excluded ingredient", () => {
    const recipes = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    const exclude = ["flax"];
    const actual = filterByIngredient(recipes, exclude);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should not return recipe if it includes an excluded ingredient and works with multiple exclude items", () => {
    const recipes = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
    ];
    const exclude = ["banana", "onion", "apple juice"];
    const actual = filterByIngredient(recipes, exclude);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should not return recipe if it includes an excluded ingredient and works with multiple recipes and exclude items", () => {
    const recipes = [
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
      {
        id: "recipe-31",
        imageUrl: "http://www.images.com/21",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "strawberries", grams: 187 },
          { name: "kale", grams: 41 },
          { name: "apple juice", grams: 64 },
          { name: "coffee", grams: 146 },
          { name: "cocoa nibs", grams: 154 },
        ],
      },
    ];
    const exclude = ["banana", "flax"];
    const actual = filterByIngredient(recipes, exclude);
    const expected = [
      {
        id: "recipe-31",
        imageUrl: "http://www.images.com/21",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "strawberries", grams: 187 },
          { name: "kale", grams: 41 },
          { name: "apple juice", grams: 64 },
          { name: "coffee", grams: 146 },
          { name: "cocoa nibs", grams: 154 },
        ],
      },
    ];
    expect(actual).toEqual(expected);
  });
});
