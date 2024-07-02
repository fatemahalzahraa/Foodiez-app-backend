const express = require("express");
const { getAllRecipies, getOneRecipe, createRecipe } = require("./controllers");
const passport = require("passport");

const router = express.Router();

router.get("/getAllRecipes", getAllRecipies);

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

router.post(
  "/createRecipe",
  passport.authenticate("jwt", { session: false }),
  createRecipe
);

//router.method("url",function)

module.exports = router;
