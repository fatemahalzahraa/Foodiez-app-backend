const express = require("express");
const {
  recipeAdd,
  addRecipetoIngredient,
  getRecipebyId,
} = require("./controllers");

const recipyRouter = express.Router();

recipyRouter.get("/:recipeId", getRecipebyId);

recipyRouter.post(
  "/:userId/:categoryId",
  passport.authenticate("jwt", { session: false }),
  recipeAdd
);

recipyRouter.put("/:recipeId/:ingredientId", addRecipetoIngredient);

module.exports = recipyRouter;
