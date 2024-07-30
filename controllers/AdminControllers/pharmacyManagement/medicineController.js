const Medicine = require('../../../models/AdminModels/pharmacyManagement/medicineModel');

exports.createMedicine = async (req, res) => {
    const { medicineName, categoryName, description, quantity, price, manufacturedBy, status } = req.body;
    try {
        const newMedicine = new Medicine({
            medicineName,
            categoryName,
            description,
            quantity,
            price,
            manufacturedBy,
            status
        });

        await newMedicine.save();
        res.status(201).json({ message: 'Medicine created successfully', newMedicine });
    } catch (err) {
        console.error('Error creating medicine:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json({message: "Medicines Retrived Succesfullly",medicines});
    } catch (err) {
        console.error('Error retrieving medicines:', err);
        res.status(400).json({ error: err.message });
    }
};
