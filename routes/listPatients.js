// routes/listPatients.js
const express = require('express');
const router = express.Router();
const { listPatients } = require('../listPatients');

router.get('/', listPatients);

module.exports = router;
