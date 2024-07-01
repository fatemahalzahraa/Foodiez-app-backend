const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  image: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  website: { type: String },
  bio: { type: String },
  recipes: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("User", UserSchema);
