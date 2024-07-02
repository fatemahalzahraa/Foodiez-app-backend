const Ingredient = require("../../models/Ingredient");

const ingredientAdd = async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};

const getAllIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    return res.status(200).json(ingredients);
  } catch (error) {
    return next(error);
  }
};

module.exports = { ingredientAdd, getAllIngredients };
