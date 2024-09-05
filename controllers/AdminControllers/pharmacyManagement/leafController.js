const Leaf = require('../../../models/AdminModels/pharmacyManagement/leafModel');

// Create a new Leaf
const createLeaf = async (req, res) => {
    try {
        const { leafType, qtyBox, status } = req.body;

        const newLeaf = new Leaf({
            leafType,
            qtyBox,
            status
        });

        await newLeaf.save();
        res.status(201).json({message:"Leaf Added Succesfully",newLeaf});
    } catch (err) {
        console.error('Error creating leaf:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get all Leaves
const getAllLeaves = async (req, res) => {
    try {
        const leaves = await Leaf.find();
        res.status(200).json({message: "All Leaves Retrieved Succesfully",leaves});
    } catch (err) {
        console.error('Error fetching leaves:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get a single Leaf by ID
const getLeafById = async (req, res) => {
    try {
        const leaf = await Leaf.findById(req.params.id);
        if (!leaf) {
            return res.status(404).json({ message: 'Leaf not found' });
        }
        res.status(200).json(leaf);
    } catch (err) {
        console.error('Error fetching leaf:', err);
        res.status(500).send({ error: err.message });
    }
};

// Update a Leaf by ID
const updateLeaf = async (req, res) => {
    try {
        const { leafType, qtyBox, status } = req.body;
        const updatedLeaf = await Leaf.findByIdAndUpdate(
            req.params.id,
            { leafType, qtyBox, status },
            { new: true }
        );
        if (!updatedLeaf) {
            return res.status(404).json({ message: 'Leaf not found' });
        }
        res.status(200).json(updatedLeaf);
    } catch (err) {
        console.error('Error updating leaf:', err);
        res.status(500).send({ error: err.message });
    }
};

// Delete a Leaf by ID
const deleteLeaf = async (req, res) => {
    try {
        const leaf = await Leaf.findByIdAndDelete(req.params.id);
        if (!leaf) {
            return res.status(404).json({ message: 'Leaf not found' });
        }
        res.status(200).json({ message: 'Leaf deleted successfully' });
    } catch (err) {
        console.error('Error deleting leaf:', err);
        res.status(500).send({ error: err.message });
    }
};
module.exports = {createLeaf, updateLeaf, getLeafById, getAllLeaves, deleteLeaf};