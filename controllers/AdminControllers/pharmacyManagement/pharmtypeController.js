const Type = require('../../../models/AdminModels/pharmacyManagement/PharmtypeModel');

// Create a new Type
const createType = async (req, res) => {
    try {
        const { name } = req.body;

        const newType = new Type({
            name,
        });

        await newType.save();
        res.status(201).json({message: "Type Added Succesfully",newType});
    } catch (err) {
        console.error('Error creating type:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get all Types
const getAllTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.status(200).json({message:"All Types retrieved Succesfully",types});
    } catch (err) {
        console.error('Error fetching types:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get a single Type by ID
const getTypeById = async (req, res) => {
    try {
        const type = await Type.findById(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        res.status(200).json(type);
    } catch (err) {
        console.error('Error fetching type:', err);
        res.status(500).send({ error: err.message });
    }
};

// Update a Type by ID
const updateType = async (req, res) => {
    try {
        const { name } = req.body;
        const updatedType = await Type.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!updatedType) {
            return res.status(404).json({ message: 'Type not found' });
        }
        res.status(200).json(updatedType);
    } catch (err) {
        console.error('Error updating type:', err);
        res.status(500).send({ error: err.message });
    }
};

// Delete a Type by ID
const deleteType = async (req, res) => {
    try {
        const type = await Type.findByIdAndDelete(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        res.status(200).json({ message: 'Type deleted successfully' });
    } catch (err) {
        console.error('Error deleting type:', err);
        res.status(500).send({ error: err.message });
    }
};
module.exports = {createType, updateType, getAllTypes, getTypeById, deleteType};