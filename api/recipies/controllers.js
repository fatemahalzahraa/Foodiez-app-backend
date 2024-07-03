const Recipe = require("../../models/Recipe");
const User = require("../../models/User");
const Category = require("../../models/Category");
const Ingredient = require("../../models/Ingredient");

const getAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find().populate("username", "name");
    return res.status(200).json(recipies);
  } catch (error) {
    next(error);
  }
};

// const getOneRecipe = async (recipeId, next) => {
//     try {
//       const recipe = await Recipe.findById(recipeId);
//       return recipe;
//     } catch (error) {
//       next(error);
//     }
//   };

const getRecipebyId = async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json("No recipe found");
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    next(error);
  }
};

//??populate used correctly??

// const getOneRecipe = async (recipeId, next) => {
//   try {
//     const recipe = await Recipe.findById(recipeId);
//     return recipe;
// } catch (error) {
// next(error);
//   }
// };

const addRecipe = async (req, res, next) => {
  try {
    req.file ? (req.body.image = req.file.path) : "";
    const userId = req.params.userId;
    req.body.user = userId;

    const categoryId = req.params.categoryId;
    req.body.category = categoryId;

    const newRecipe = await Recipe.create(req.body);

    await User.findByIdAndUpdate(userId, {
      $push: { recipies: newRecipe._id },
    });

    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipies: newRecipe._id },
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

const addRecipetoIngredient = async (req, res, next) => {
  try {
    const { recipeId, ingredientId } = req.params;

    await Recipe.findByIdAndUpdate(recipeId, {
      $push: { ingredients: ingredientId },
    });
    await Ingredient.findByIdAndUpdate(ingredientId, {
      $push: { recipies: recipeId },
    });
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipies,
  addRecipe,
  addRecipetoIngredient,
  getRecipebyId,
};
