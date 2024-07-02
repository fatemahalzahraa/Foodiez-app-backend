const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String },
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = mongoose.model("Category", CategorySchema);
