// src/middleware/authMiddleware.js
const ensureAuthenticated = (req, res, next) => {
    if (req.session.patientId) {
        return next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = ensureAuthenticated;