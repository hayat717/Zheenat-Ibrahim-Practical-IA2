import { create } from '../models/Encounter';

export async function startEncounter(req, res) {
try {
    const encounterData = req.body;
    const newEncounter = await create(encounterData);
    res.status(201).json({ message: 'Encounter started successfully', encounter: newEncounter });
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}