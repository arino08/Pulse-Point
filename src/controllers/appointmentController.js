// src/controllers/appointmentController.js
const appointmentModel = require('../models/appointmentModel');

exports.createAppointment = (req, res) => {
    const { doctor_id, appointment_date } = req.body;
    const patientId = req.session.patientId;
    if (!patientId) return res.status(401).send('Unauthorized');

    appointmentModel.createAppointment(doctor_id, patientId, appointment_date, (err, results) => {
        if (err) {
            console.error('Error creating appointment:', err);
            return res.status(500).send('Error creating appointment');
        }
        res.status(201).send('Appointment created successfully');
    });
};

exports.getAppointments = (req, res) => {
    const patientId = req.session.patientId;
    if (!patientId) return res.status(401).send('Unauthorized');

    appointmentModel.getAppointmentsByPatientId(patientId, (err, results) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            return res.status(500).send('Error fetching appointments');
        }
        res.json(results);
    });
};