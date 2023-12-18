// routes/listPatients.js
const express = require('express');
const router = express.Router();
const { listPatients } = require('../controllers/listPatients');

router.get('/', listPatients);

module.exports = router;
