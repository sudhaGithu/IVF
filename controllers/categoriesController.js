// controllers/categoryController.js
const Category = require('../models/inventorycategoriesModel');

// Create Category
const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Read all Categories (excluding soft-deleted)
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isDeleted: false });
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read single Category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id, isDeleted: false });
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update Category by ID
const updateCategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category || category.isDeleted) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Soft Delete Category by ID
const deleteCategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send({ message: 'Category soft deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById
};
