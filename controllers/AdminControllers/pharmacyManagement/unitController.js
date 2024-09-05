const Unit = require('../../../models/AdminModels/pharmacyManagement/unitsModel');

// Create a new Unit
const createUnit = async (req, res) => {
    try {
        const { name } = req.body;

        const newUnit = new Unit({
            name,
        });

        await newUnit.save();
        res.status(201).json({ message: "Unit Added Successfully", newUnit });
    } catch (err) {
        console.error('Error creating unit:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get all Units
const getAllUnits = async (req, res) => {
    try {
        const units = await Unit.find();
        res.status(200).json({ message: "All Units retrieved Successfully", units });
    } catch (err) {
        console.error('Error fetching units:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get a single Unit by ID
const getUnitById = async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(200).json(unit);
    } catch (err) {
        console.error('Error fetching unit:', err);
        res.status(500).send({ error: err.message });
    }
};

// Update a Unit by ID
const updateUnit = async (req, res) => {
    try {
        const { name } = req.body;
        const updatedUnit = await Unit.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!updatedUnit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(200).json(updatedUnit);
    } catch (err) {
        console.error('Error updating unit:', err);
        res.status(500).send({ error: err.message });
    }
};

// Delete a Unit by ID
const deleteUnit = async (req, res) => {
    try {
        const unit = await Unit.findByIdAndDelete(req.params.id);
        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (err) {
        console.error('Error deleting unit:', err);
        res.status(500).send({ error: err.message });
    }
};

module.exports = { createUnit, updateUnit, getAllUnits, getUnitById, deleteUnit };
