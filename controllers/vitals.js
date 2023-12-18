// controllers/submitVitals.js
const Vitals = require('../models/Vitals');

exports.submitVitals = async (req, res) => {
try {
    const vitalsData = req.body;
    const newVitals = await Vitals.create(vitalsData);
    res.status(201).json({ message: 'Vitals submitted successfully', vitals: newVitals });
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
};
