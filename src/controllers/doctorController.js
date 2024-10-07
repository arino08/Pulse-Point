// src/controllers/doctorController.js
const db = require('../models/db');

exports.getAllDoctors = (req, res) => {
    const { specialization, name } = req.query;
    let query = 'SELECT * FROM doctors WHERE 1=1';
    const params = [];

    if (specialization) {
        query += ' AND specialization = ?';
        params.push(specialization);
    }

    if (name) {
        query += ' AND name LIKE ?';
        params.push(`%${name}%`);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching doctors:', err);
            return res.status(500).send('Error fetching doctors');
        }
        res.json({ doctors: results });
    });
};

exports.addDoctor = (req, res) => {
    const { name, specialization, description, image } = req.body;
    db.query('INSERT INTO doctors (name, specialization, description, image) VALUES (?, ?, ?, ?)', [name, specialization, description, image], (err, results) => {
        if (err) {
            console.error('Error adding doctor:', err);
            return res.status(500).send('Error adding doctor');
        }
        res.json({ id: results.insertId });
    });
};