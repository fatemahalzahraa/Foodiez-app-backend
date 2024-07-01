const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  recipies: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
