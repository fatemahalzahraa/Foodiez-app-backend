const Category = require("../../models/Category");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().populate("recipies", "title");
    return res.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
};
const addCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = { addCategory, getAllCategories };
