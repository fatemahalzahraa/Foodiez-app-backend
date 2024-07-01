const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  servings: { type: Number },
  cookTime: { type: String },
  prepTime: { type: String },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId }],
  instructions: { type: String },
  category: {},
  user: {},
});

module.exports = mongoose.model("Recipe", RecipeSchema);
