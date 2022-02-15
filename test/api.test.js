const supertest = require("supertest");
const { filterByIngredient, resetData } = require("../data/util");
const server = require("../server");

const request = supertest(server);

afterAll(() => {
  resetData();
});

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("ok");
});

describe("GET/api/recipes", () => {
  test("should responds with all recipes", () => {
    return request
      .get("/api/recipes")
      .expect(200)
      .then((res) => {
        expect(res.body.recipes).toHaveLength(100);
      });
  });
  test("should filter recipes by exclude query", () => {
    return request
      .get("/api/recipes?exclude_ingredients=apple,banana,carrot")
      .expect(200)
      .then((res) => {
        res.body.recipes.forEach((recipe) => {
          const ingredients = recipe.ingredients.map(
            (ingredient) => ingredient.name
          );
          ingredients.forEach((ingredient) => {
            expect(ingredient).not.toBe("apple");
            expect(ingredient).not.toBe("banana");
            expect(ingredient).not.toBe("carrot");
          });
        });
      });
  });
});

describe("GET /api/recipes/:id", () => {
  test("should return specific recipe", () => {
    return request
      .get("/api/recipes/recipe-59")
      .expect(200)
      .then((res) => {
        expect(res.body.recipe.id).toBe("recipe-59");
      });
  });
});

describe("POST /api/recipes", () => {
  test("should add recipe to the database", () => {
    return request
      .post("/api/recipes")
      .send({
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      })
      .expect(201)
      .then((res) => {
        expect(res.body.id).toBe("recipe-100");
      });
  });
});
