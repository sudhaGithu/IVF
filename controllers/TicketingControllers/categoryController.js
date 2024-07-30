const Category = require('../../models/TicketingModels/categoryModel');

const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getCategeories = async (req, res) => {
    try {
        const categeories = await Category.find();
        res.status(200).json(categeories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
module.exports= {createCategory, getCategeories}