// src/models/appointmentModel.js
const db = require('./db');

const createAppointment = (doctorId, patientId, appointmentDate, callback) => {
    db.query('INSERT INTO appointments (doctor_id, patient_id, appointment_date) VALUES (?, ?, ?)', [doctorId, patientId, appointmentDate], callback);
};

const getAppointmentsByPatientId = (patientId, callback) => {
    db.query('SELECT a.id, a.appointment_date, d.name AS doctor_name, d.specialization FROM appointments a JOIN doctors d ON a.doctor_id = d.id WHERE a.patient_id = ?', [patientId], callback);
};

module.exports = {
    createAppointment,
    getAppointmentsByPatientId
};