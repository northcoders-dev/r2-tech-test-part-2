# Lizzo’s Juicy Juice Bar

Lizzo’s Juicy Juice Bar, a trendy Northern Quarter juice/smoothie cafe, is only a few days from launching. Lizzo has lots of raw data to populate her digital menus, and she needs a way to build custom menu plans from this raw menu plan data.

_Please spend a maximum of 3 hours on these tasks. We don't want to take up loads of your time, and we're much interested in your process than what you finish_

**Please use `data.json` as your DB. Any modification should be programmatic**

_TIP_ there are some tips at the bottom of this document.

## 1 - GET `/api/recipes`

Write a GET endpoint that responds with a list of all recipes.

Include a query (`?exclude_ingredients=apples,bananas,carrots`) to exclude recipes that contain specific ingredients.

# 2 - GET `/api/recipes/:id`

Write a GET endpoint that responds with a single recipe.

# 3 - POST `/api/recipes`

Write a POST endpoint that adds a recipe to the data. This should respond with the generated recipe ID. The newly created recipe should be retrievable.

## Tips

- We're looking for clean code that follows good practices, and we need to know that it _works_.

- Your server should follow the principles of REST, and crucially be stateless and idempotent.

- Some recipes - i.e. recipe-86, have duplicated ingredients with different weights. Is there a nicer way to handle this?
