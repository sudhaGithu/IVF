// controllers/supplierController.js
const Supplier = require('../models/suppliersModel');

// Create Supplier
const createSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).send(supplier);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Read all Suppliers (excluding soft-deleted)
const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({ isDeleted: false });
    res.send(suppliers);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read single Supplier by ID
const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findOne({ _id: req.params.id, isDeleted: false });
    if (!supplier) {
      return res.status(404).send({ message: 'Supplier not found' });
    }
    res.send(supplier);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update Supplier by ID
const updateSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!supplier || supplier.isDeleted) {
      return res.status(404).send({ message: 'Supplier not found' });
    }
    res.send(supplier);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Soft Delete Supplier by ID
const deleteSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!supplier) {
      return res.status(404).send({ message: 'Supplier not found' });
    }
    res.send({ message: 'Supplier soft deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById
};
