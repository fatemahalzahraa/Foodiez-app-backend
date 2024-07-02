const express = require("express");
const { addCategory, getAllCategories } = require("./controllers");

const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
categoryRouter.get("/", getAllCategories);

module.exports = categoryRouter;
