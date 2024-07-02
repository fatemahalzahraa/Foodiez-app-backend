const express = require("express");
const {
  addRecipe,
  addRecipetoIngredient,
  getRecipebyId,
  getAllRecipies,
} = require("./controllers");
const passport = require("passport");
const recipeRouter = express.Router();

recipeRouter.get("/allRecipies", getAllRecipies);

router.param("recipeId", async (req, res, next, recipeId) => {
  const recipe = await getOneRecipe(recipeId, next);
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    const error = new Error("Recipe Not Found");
    error.status = 404;
    next(error);
  }
});

recipeRouter.get("/:recipeId", getRecipebyId);

recipeRouter.post(
  "/:userId/:categoryId",
  passport.authenticate("jwt", { session: false }),
  addRecipe
);

recipeRouter.put("/:recipeId/:ingredientId", addRecipetoIngredient);

module.exports = recipeRouter;
