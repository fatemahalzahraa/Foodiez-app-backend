const express = require("express");
const { addCategory, getAllCategories } = require("./controllers");

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", addCategory);

module.exports = categoryRouter;
