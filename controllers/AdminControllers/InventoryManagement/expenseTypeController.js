
const ExpenseType = require('../../../models/AdminModels/InventoryManagement/ExpenseType');

const createExpenseType = async (req, res) => {
    try {
        const { expenseType } = req.body;

        const newExpenseType = new ExpenseType({ expenseType });

        await newExpenseType.save();
        res.status(201).json(newExpenseType);
    } catch (err) {
        console.error('Error creating expense type:', err);
        res.status(500).send({error: err.message});
    }
};

const updateExpenseType = async (req, res) => {
    try {
        const { expenseType } = req.body;
        const typeId = req.params.id;

        const updatedExpenseType = await ExpenseType.findByIdAndUpdate(typeId, { expenseType }, { new: true });

        if (!updatedExpenseType) {
            return res.status(404).send('Expense type not found');
        }

        res.json(updatedExpenseType);
    } catch (err) {
        console.error('Error updating expense type:', err);
        res.status(500).send({error: err.message});
    }
};

const getAllExpenseTypes = async (req, res) => {
    try {
        const expenseTypes = await ExpenseType.find();
        res.status(200).json(expenseTypes);
    } catch (err) {
        console.error('Error retrieving expense types:', err);
        res.status(500).send({error: err.message});
    }
};

const getExpenseType = async (req, res) => {
    const { id } = req.params;
    try {
        const expenseType = await ExpenseType.findById(id);
        if (!expenseType) {
            return res.status(404).send('Expense type not found');
        }
        res.status(200).json(expenseType);
    } catch (err) {
        console.error('Error retrieving expense type:', err);
        res.status(500).send({error: err.message});
    }
};

const deleteExpenseType = async (req, res) => {
    try {
        const typeId = req.params.id;
        const deletedExpenseType = await ExpenseType.findByIdAndDelete(typeId);

        if (!deletedExpenseType) {
            return res.status(404).send('Expense type not found');
        }

        res.status(200).send('Expense type deleted successfully');
    } catch (err) {
        console.error('Error deleting expense type:', err);
        res.status(500).send({error: err.message});
    }
};

module.exports = {
    createExpenseType,
    updateExpenseType,
    getAllExpenseTypes,
    getExpenseType,
    deleteExpenseType
};
