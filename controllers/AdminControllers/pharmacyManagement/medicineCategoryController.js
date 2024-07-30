const MedicineCategory = require('../../../models/AdminModels/pharmacyManagement/medicineCategoryModel');

exports.createMedicineCategory = async (req, res) => {
    const { categoryName, description, status } = req.body;
    try {
        const newMedicineCategory = new MedicineCategory({
            categoryName,
            description,
            status
        });

        await newMedicineCategory.save();
        res.status(201).json({ message: 'Medicine Category created successfully', newMedicineCategory });
    } catch (err) {
        console.error('Error creating Medicine Category:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicineCategories = async (req, res) => {
    try {
        const medicineCategories = await MedicineCategory.find();
        res.status(200).json({message: "Medicine Categories Retrieved Succesfully ",medicineCategories});
    } catch (err) {
        console.error('Error retrieving Medicine Categories:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicineCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const medicineCategory = await MedicineCategory.findById(id);
        if (!medicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json(medicineCategory);
    } catch (err) {
        console.error('Error retrieving Medicine Category:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.updateMedicineCategory = async (req, res) => {
    const { id } = req.params;
    const { categoryName, description, status } = req.body;
    try {
        const updatedMedicineCategory = await MedicineCategory.findByIdAndUpdate(id, {
            categoryName,
            description,
            status
        }, { new: true });
        if (!updatedMedicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json(updatedMedicineCategory);
    } catch (err) {
        console.error('Error updating Medicine Category:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.deleteMedicineCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMedicineCategory = await MedicineCategory.findByIdAndDelete(id);
        if (!deletedMedicineCategory) {
            return res.status(404).json({ message: 'Medicine Category not found' });
        }
        res.status(200).json({ message: 'Medicine Category deleted successfully' });
    } catch (err) {
        console.error('Error deleting Medicine Category:', err);
        res.status(400).json({ error: err.message });
    }
};
