const Medicine = require('../../../models/AdminModels/pharmacyManagement/medicineModel');

// Create a new Medicine
const createMedicine = async (req, res) => {
    try {
        const { name, genericName, barcode, supplier, size, vendor, quantity, price, buyPrice, vat, igta, shelf, hnsCode, strength, image, status, categories, description } = req.body;

        const newMedicine = new Medicine({
            name, genericName, barcode, supplier, size, vendor, quantity, price, buyPrice, vat, igta, shelf, hnsCode, strength, image, status, categories, description
        });

        await newMedicine.save();
        res.status(201).json({ message: "Medicine added successfully", newMedicine });
    } catch (err) {
        console.error('Error creating medicine:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get all Medicines
const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json({ message: "All medicines retrieved successfully", medicines });
    } catch (err) {
        console.error('Error fetching medicines:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get a single Medicine by ID
const getMedicineById = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json(medicine);
    } catch (err) {
        console.error('Error fetching medicine:', err);
        res.status(500).send({ error: err.message });
    }
};

// Update a Medicine by ID
const updateMedicine = async (req, res) => {
    try {
        const { name, genericName, barcode, supplier, size, vendor, quantity, price, buyPrice, vat, igta, shelf, hnsCode, strength, image, status, categories, description } = req.body;

        const updatedMedicine = await Medicine.findByIdAndUpdate(
            req.params.id,
            { name, genericName, barcode, supplier, size, vendor, quantity, price, buyPrice, vat, igta, shelf, hnsCode, strength, image, status, categories, description },
            { new: true }
        );

        if (!updatedMedicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({ message: "Medicine updated successfully", updatedMedicine });
    } catch (err) {
        console.error('Error updating medicine:', err);
        res.status(500).send({ error: err.message });

    }
};

// Delete a Medicine by ID
const deleteMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findByIdAndDelete(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({ message: 'Medicine deleted successfully' });
    } catch (err) {
        console.error('Error deleting medicine:', err);
        res.status(500).send({ error: err.message });
    }
};

module.exports = {createMedicine, updateMedicine, deleteMedicine, getAllMedicines, getMedicineById};