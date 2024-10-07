// src/models/patientModel.js
const db = require('./db');
const bcrypt = require('bcryptjs');

const createPatient = (name, email, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.query('INSERT INTO patients (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], callback);
};

const findPatientByEmail = (email, callback) => {
    db.query('SELECT * FROM patients WHERE email = ?', [email], callback);
};

module.exports = {
    createPatient,
    findPatientByEmail
};