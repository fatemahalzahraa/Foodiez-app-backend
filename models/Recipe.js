const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  servings: { type: Number },
  cookTime: { type: String },
  prepTime: { type: String },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId }],
  instructions: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  username: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
