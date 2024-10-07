// src/controllers/patientController.js
const db = require('../models/db');

exports.getAllPatients = (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addPatient = (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO patients (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId });
    });
};