const MedicineCategory = require('../../../models/AdminModels/pharmacyManagement/MedicineCategoryModel');
const path = require('path');
const fs = require('fs');

// Create a new MedicineCategory
const createMedicineCategory = async (req, res) => {
    try {
        const { title, sorting, status, showInHome, showInTopMenu, topCategory, type } = req.body;
        const categoryImage = req.files.categoryImage[0].path;
        const bannerImage = req.files.bannerImage[0].path;

        const newMedicineCategory = new MedicineCategory({
            title,
            categoryImage,
            bannerImage,
            sorting,
            status,
            showInHome,
            showInTopMenu,
            topCategory,
            type,
        });

        await newMedicineCategory.save();
        res.status(201).json({ message: "Medicine Category Added Successfully", newMedicineCategory });
    } catch (err) {
        console.error('Error creating MedicineCategory:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get all MedicineCategories
const getAllMedicineCategories = async (req, res) => {
    try {
        const medicineCategories = await MedicineCategory.find();
        res.status(200).json({ message: "All Medicine Categories retrieved Successfully", medicineCategories });
    } catch (err) {
        console.error('Error fetching MedicineCategories:', err);
        res.status(500).send({ error: err.message });
    }
};

// Get a single MedicineCategory by ID
const getMedicineCategoryById = async (req, res) => {
    try {
        const medicineCategory = await MedicineCategory.findById(req.params.id);
        if (!medicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json(medicineCategory);
    } catch (err) {
        console.error('Error fetching MedicineCategory:', err);
        res.status(500).send({ error: err.message });
    }
};

// Update a MedicineCategory by ID
const updateMedicineCategory = async (req, res) => {
    try {
        const { title, sorting, status, showInHome, showInTopMenu, topCategory, type } = req.body;
        const categoryImage = req.files?.categoryImage?.[0]?.path;
        const bannerImage = req.files?.bannerImage?.[0]?.path;

        const updatedMedicineCategory = await MedicineCategory.findByIdAndUpdate(
            req.params.id,
            {
                title,
                categoryImage,
                bannerImage,
                sorting,
                status,
                showInHome,
                showInTopMenu,
                topCategory,
                type,
            },
            { new: true }
        );

        if (!updatedMedicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json(updatedMedicineCategory);
    } catch (err) {
        console.error('Error updating MedicineCategory:', err);
        res.status(500).send({ error: err.message });
    }
};

// Delete a MedicineCategory by ID
const deleteMedicineCategory = async (req, res) => {
    try {
        const medicineCategory = await MedicineCategory.findByIdAndDelete(req.params.id);
        if (!medicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json({ message: 'Medicine Category deleted successfully' });
    } catch (err) {
        console.error('Error deleting MedicineCategory:', err);
        res.status(500).send({ error: err.message });
    }
};

module.exports = { createMedicineCategory, getAllMedicineCategories, getMedicineCategoryById, updateMedicineCategory, deleteMedicineCategory };
