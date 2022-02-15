exports.validatePostRequest = ({ imageUrl, instructions, ingredients }) => {
  if (typeof imageUrl !== "string") return false;
  if (typeof instructions !== "string") return false;

  if (!Array.isArray(ingredients)) return false;

  if (
    !ingredients.every((ingredient) => {
      return (
        typeof ingredient === "object" &&
        typeof ingredient.name === "string" &&
        typeof ingredient.grams === "number"
      );
    })
  ) {
    return false;
  }

  return true;
};
