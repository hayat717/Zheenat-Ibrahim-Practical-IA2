// controllers/patientDetails.js
const Patient = require('../models/Patient');

exports.patientDetails = async (req, res) => {
try {
    const { patientId } = req.params;
    const patient = await Patient.findOne({ patientId });
    
    if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
    }
    
    res.json({ patient });
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
};
