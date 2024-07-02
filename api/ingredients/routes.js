const express = require("express");

const ingredientRouter = express.Router();

const { addIngredient, getAllIngredients } = require("./controllers");

ingredientRouter.get("/", getAllIngredients);
ingredientRouter.post("/", addIngredient);

module.exports = ingredientRouter;
