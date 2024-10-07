// src/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const ensureAuthenticated = require('../middleware/authMiddleware');

router.post('/', ensureAuthenticated, appointmentController.createAppointment);
router.get('/', ensureAuthenticated, appointmentController.getAppointments);

module.exports = router;