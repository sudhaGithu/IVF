// models/category.js
const mongoose = require('mongoose');

// Schema definitions
const CategorySchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Model creation
const Category = mongoose.model('inventoryCategory', CategorySchema);

module.exports = Category;
