const Recipe = require("../../models/Recipe");

const getAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find().populate("username", "name");
    return res.status(200).json(recipies);
  } catch (error) {
    next(error);
  }
};

//??populate used correctly??

const getOneRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    req.body.username = req.user._id;
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllRecipies, getOneRecipe, createRecipe };
