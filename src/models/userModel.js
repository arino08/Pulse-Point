// src/models/userModel.js
const db = require('./db');
const bcrypt = require('bcryptjs');

const createUser = (name, email, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.query('INSERT INTO patients (name, password, email) VALUES (?, ?, ?)', [name, hashedPassword, email], callback);
};

const findUserByEmail = (email, callback) => {
    db.query('SELECT * FROM patients WHERE email = ?', [email], callback);
};

module.exports = {
    createUser,
    findUserByEmail
};