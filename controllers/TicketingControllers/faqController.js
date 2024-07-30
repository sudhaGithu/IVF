const FAQ = require('../../models/TicketingModels/faqModel');

exports.createFAQ = async (req, res) => {
    const { name, status, description } = req.body;
    try {
        const newFAQ = new FAQ({
            name,
            status,
            description
        });

        await newFAQ.save();
        res.status(201).json({ message: 'FAQ created successfully', newFAQ });
    } catch (err) {
        console.error('Error creating FAQ:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (err) {
        console.error('Error retrieving FAQs:', err);
        res.status(400).json({ error: err.message });
    }
};
