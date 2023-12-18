// controllers/listPatients.js
const Patient = require('../models/Patient');

exports.listPatients = async (req, res) => {
try {
    const patients = await Patient.find();
    res.json({ patients });
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
};
