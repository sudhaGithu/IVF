const Customer = require('../../../models/AdminModels/InventoryManagement/Customer');

exports.createCustomer = async (req, res) => {
    try {
        const { customerName, mobile, email, billingAddress, status } = req.body;
        const newCustomer = new Customer({ customerName, mobile, email, billingAddress, status });
        await newCustomer.save();
        res.status(201).json({message:"Inventory Customer Added Succesfully",newCustomer});
    } catch (err) {
        console.error('Error creating customer:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        console.error('Error getting all customers:', err);
        res.status(500).send('Server Error');
    }
};

// exports.getCustomer = async (req, res) => {
//     try {
//         const customer = await Customer.findById(req.params.id);
//         if (!customer) {
//             return res.status(404).json({ message: 'Customer not found' });
//         }
//         res.status(200).json(customer);
//     } catch (err) {
//         console.error('Error getting customer:', err);
//         res.status(500).send('Server Error');
//     }
// };
// exports.getCustomer = async (req, res) => {
//     try {
//         // const { id } = req.params;
//         // if (!mongoose.Types.ObjectId.isValid(id)) {
//         //     return res.status(400).json({ message: 'Invalid ID format' });
//         // }
//         const customer = await Customer.findById();
//         if (!customer) {
//             return res.status(404).json({ message: 'Customer not found' });
//         }
//         res.status(200).json(customer);
//     } catch (err) {
//         console.error('Error getting customer:', err);
//         res.status(500).send('Server Error');
//     }
// };



exports.updateCustomer = async (req, res) => {
    try {
        const { customerName, mobile, email, billingAddress } = req.body;
        const customer = await Customer.findByIdAndUpdate(req.params.id, { customerName, mobile, email, billingAddress }, { new: true });
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (err) {
        console.error('Error updating customer:', err);
        res.status(500).send('Server Error');
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (err) {
        console.error('Error deleting customer:', err);
        res.status(500).send('Server Error');
    }
};

exports.getPaidCustomeres = async (req, res) => {
    try {
        const customersinventory = await Customer.find({ status: 'Paid' });
        res.status(200).json({message:"Retrieved paid InventoryCustomers Succesfully",customersinventory});
    } catch (err) {
        console.error('Error getting paid customersinventory:', err);
        res.status(500).send({error: err.message});
    }
};

// Get unpaid expenses
exports.getUnpaidCustomers = async (req, res) => {
    try {
        const customersinventory = await Customer.find({ status: 'Unpaid' });
        res.status(200).json({message: "Retrieved Unpaid InventoryCustomers Succesfully",customersinventory});
    } catch (err) {
        console.error('Error getting unpaid customersinventory:', err);
        res.status(500).send({error: err.message});
    }
};