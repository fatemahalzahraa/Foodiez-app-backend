const express = require("express");

const ingredientRouter = express.Router();

const { ingredientAdd, getAllIngredients } = require("./controllers");

ingredientRouter.get("/", getAllIngredients);
ingredientRouter.post("/", ingredientAdd);

module.exports = ingredientRouter;
