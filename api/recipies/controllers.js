const User = require("../../models/User");
const Recipe = require("../../models/Recipe");
const Category = require("../../models/Category");
const Ingredient = require("../../models/Ingredient");

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

const addRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }

    const userId = req.user._id;
    req.body.user = userId;

    const categoryId = req.body.cuisine;
    req.body.category = categoryId;

    const newRecipe = await Recipe.create(req.body);

    await User.findByIdAndUpdate(userId, {
      $push: { recipes: newRecipe._id },
    });

    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipes: newRecipe._id },
    });

    await Ingredient.updateMany(
      { _id: req.body.ingredients },
      {
        $push: { recipies: newRecipe._id },
      }
    );

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
      $push: { recipes: recipeId },
    });
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { addRecipe, addRecipetoIngredient, getRecipebyId };
