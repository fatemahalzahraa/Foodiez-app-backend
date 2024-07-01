const categoryAdd = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = { categoryAdd };
