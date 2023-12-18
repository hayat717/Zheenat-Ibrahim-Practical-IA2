// app.js
import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(json());

connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true });




// Routes
app.use('/register', require('./routes/register'));
app.use('/start-encounter', require('../routes/startEncounter').default);
app.use('/submit-vitals', require('./routes/submitVitals'));
app.use('/list-patients', require('../routes/listPatients'));
app.use('/patient-details', require('../routes/patientDetails'));

// Start the server
app.listen(port, () => {
console.log(`Server is running on port ${3000}`);
});
