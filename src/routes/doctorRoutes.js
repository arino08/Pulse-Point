// src/routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getAllDoctors);
router.post('/', doctorController.addDoctor);

// New route to fetch all doctors
router.get('/all', doctorController.getAllDoctors);

module.exports = router;