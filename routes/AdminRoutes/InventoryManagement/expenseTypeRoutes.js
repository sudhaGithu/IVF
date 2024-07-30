const express = require('express');
const router = express.Router();
const expenseTypeController = require('../../../controllers/AdminControllers/InventoryManagement/expenseTypeController');

router.post('/expense-type', expenseTypeController.createExpenseType);
router.put('/expense-type/:id', expenseTypeController.updateExpenseType);
router.get('/expense-types', expenseTypeController.getAllExpenseTypes);
router.get('/expense-type/:id', expenseTypeController.getExpenseType);
router.delete('/expense-type/:id', expenseTypeController.deleteExpenseType);

module.exports = router;
