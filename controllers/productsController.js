const Product = require('../models/productsModel');

// Create Product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, isDeleted: false });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ isDeleted: false });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id, isDeleted: false },
            req.body,
            { new: true, runValidators: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Soft Delete Product
const softDeleteProduct = async (req, res) => {
    try {
        const result = await Product.updateOne(
            { _id: req.params.id, isDeleted: false },
            { isDeleted: true, deletedAt: new Date() }
        );
        if (result.nModified === 0) {
            return res.status(404).json({ message: 'Product not found or already deleted' });
        }
        res.status(200).json({message : "product deleted successfully"}); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Expired Products
const getExpiredProducts = async (req, res) => {
    try {
        const today = new Date();
        const expiredProducts = await Product.find({
            expDate: { $lt: today },
            isDeleted: false
        });
        res.status(200).json(expiredProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add to Dead Stock
const addToDeadStock = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, isDeleted: false });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Here you can add logic to add the product to dead stock
        // For simplicity, let's just mark it as dead stock
        product.isDeadStock = true;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Dead Stocks
const getAllDeadStocks = async (req, res) => {
    try {
        const deadStocks = await Product.find({ isDeadStock: true, isDeleted: false });
        res.status(200).json(deadStocks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    softDeleteProduct,
    getExpiredProducts,
    addToDeadStock,
    getAllDeadStocks
};
