// routes/submitVitals.js
const express = require('express');
const router = express.Router();
const { submitVitals } = require('../controllers/submitVitals');

router.post('/', submitVitals);

module.exports = router;
