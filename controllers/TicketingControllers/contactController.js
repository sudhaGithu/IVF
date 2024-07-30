const Contact = require('../../models/TicketingModels/contactModel');
const Organization = require('../../models/TicketingModels/organizationModel');
const Country = require('../../models/TicketingModels/countryModel');

exports.createContact = async (req, res) => {
    const { firstName, lastName, title, phone, email, organization, address, department, city, country } = req.body;
    try {
        const organizationRecord = await Organization.findById(organization);
        if (!organizationRecord) {
            return res.status(404).json({ message: 'Organization not found' });
        }

        const countryRecord = await Country.findById(country);
        if (!countryRecord) {
            return res.status(404).json({ message: 'Country not found' });
        }

        const newContact = new Contact({
            firstName,
            lastName,
            title,
            phone,
            email,
            organization,
            address,
            department,
            city,
            country
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact created successfully', newContact });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().populate('organization').populate('country');
        res.status(200).json(contacts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
