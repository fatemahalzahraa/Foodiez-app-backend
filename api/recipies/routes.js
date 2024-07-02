const express = require("express");
const {
  addRecipe,
  addRecipetoIngredient,
  getRecipebyId,
} = require("./controllers");

const recipeRouter = express.Router();

recipeRouter.get("/:recipeId", getRecipebyId);

recipeRouter.post(
  "/:userId/:categoryId",
  passport.authenticate("jwt", { session: false }),
  addRecipe
);

recipeRouter.put("/:recipeId/:ingredientId", addRecipetoIngredient);

module.exports = recipeRouter;
