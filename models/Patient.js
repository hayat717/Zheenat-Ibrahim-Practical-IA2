// models/Patient.js
import { Schema, model } from 'mongoose';

const patientSchema = new Schema({
patientId: { type: String, required: true, unique: true },
dateTime: { type: Date, required: true },
otherNames: { type: String, required: true },
gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
phone: { type: String, required: true },
residentialAddress: { type: String, required: true },
emergencyName: { type: String, required: true },
emergencyContact: { type: String, required: true },
relationship: { type: String, required: true },
});

const Patient = model('Patient', patientSchema);

export default Patient;
