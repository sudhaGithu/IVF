// controllers/warehouseController.js
const Warehouse = require('../models/warehouseModel');

// Create Warehouse
const createWarehouse = async (req, res) => {
  try {
    const warehouse = new Warehouse(req.body);
    await warehouse.save();
    res.status(201).send(warehouse);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Read all Warehouses (excluding soft-deleted)
const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find({ isDeleted: false });
    res.send(warehouses);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read single Warehouse by ID
const getWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findOne({ _id: req.params.id, isDeleted: false });
    if (!warehouse) {
      return res.status(404).send({ message: 'Warehouse not found' });
    }
    res.send(warehouse);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update Warehouse by ID
const updateWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!warehouse || warehouse.isDeleted) {
      return res.status(404).send({ message: 'Warehouse not found' });
    }
    res.send(warehouse);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Soft Delete Warehouse by ID
const deleteWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!warehouse) {
      return res.status(404).send({ message: 'Warehouse not found' });
    }
    res.send({ message: 'Warehouse soft deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createWarehouse,
  getAllWarehouses,
  getWarehouseById,
  updateWarehouseById,
  deleteWarehouseById
};
