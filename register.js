import { create } from './models/Patient';

export async function registerPatient(req, res) {
try {
    const patientData = req.body;
    const newPatient = await create(patientData);
    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}
