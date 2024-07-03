const express = require("express");

const {
  addRecipe,
  addRecipetoIngredient,
  getRecipebyId,
} = require("./controllers");
const passport = require("passport");
const upload = require("../../middlewares/multer");

const recipeRouter = express.Router();

recipeRouter.get("/:recipeId", getRecipebyId);

recipeRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  addRecipe
);

recipeRouter.put("/:recipeId/:ingredientId", addRecipetoIngredient);

module.exports = recipeRouter;
