const express = require("express");

const ingredientRouter = express.Router();

const { ingredientAdd } = require("./controllers");

ingredientRouter.post("/", ingredientAdd);

module.exports = ingredientRouter;
