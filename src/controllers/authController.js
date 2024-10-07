// src/controllers/authController.js
const patientModel = require('../models/patientModel');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    const { name, password, email } = req.body;
    patientModel.createPatient(name, email, password, (err, results) => {
        if (err) {
            console.error('Error creating patient:', err);
            return res.status(500).send('Error creating patient');
        }
        res.status(201).send('Patient created successfully');
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    patientModel.findPatientByEmail(email, (err, results) => {
        if (err) {
            console.error('Error finding patient:', err);
            return res.status(500).send('Error finding patient');
        }
        if (results.length === 0) return res.status(404).send('Patient not found');

        const patient = results[0];
        const passwordIsValid = bcrypt.compareSync(password, patient.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');

        req.session.patientId = patient.id;
        res.status(200).send('Login successful');
    });
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).send('Error logging out');
        }
        res.status(200).send('Logout successful');
    });
};