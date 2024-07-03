const express = require("express");
const {
  getAllRecipies,
  getOneRecipe,
  createRecipe,
  getRecipebyId,
  addRecipe,
  addRecipetoIngredient,
} = require("./controllers");
const passport = require("passport");
const upload = require("../../middlewares/multer");
const recipeRouter = express.Router();

// router.param("recipeId", async (req, res, next, recipeId) => {
//   const recipe = await getOneRecipe(recipeId, next);
//   if (recipe) {
//     req.recipe = recipe;
//     next();
//   } else {
//     const error = new Error("Recipe Not Found");
//     error.status = 404;
//     next(error);
//   }
// });

// recipeRouter.post(
//   "/createRecipe",
//   passport.authenticate("jwt", { session: false }),
//   createRecipe
// );

//router.method("url",function)

recipeRouter.get("/allRecipies", getAllRecipies);

// recipeRouter.param("recipeId", async (req, res, next, recipeId) => {
//   const recipe = await getOneRecipe(recipeId, next);
//   if (recipe) {
//     req.recipe = recipe;
//     next();
//   } else {
//     const error = new Error("Recipe Not Found");
//     error.status = 404;
//     next(error);
//   }
// });

recipeRouter.get("/:recipeId", getRecipebyId);

recipeRouter.post(
  "/:userId/:categoryId",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  addRecipe
);

recipeRouter.put("/:recipeId/:ingredientId", addRecipetoIngredient);

module.exports = recipeRouter;
