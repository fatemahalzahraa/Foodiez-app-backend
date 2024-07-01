const express = require("express");
const { categoryAdd } = require("./controllers");

const categoryRouter = express.Router();

categoryRouter.post("/", categoryAdd);

module.exports = categoryRouter;
