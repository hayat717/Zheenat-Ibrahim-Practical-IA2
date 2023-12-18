// routes/patientDetails.js
const express = require('express');
const router = express.Router();
const { patientDetails } = require('../patientDetails');

router.get('/:patientId', patientDetails);

module.exports = router;
