const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route d'inscription
router.post('/register', authController.register);

// Route de connexion
router.post('/login', authController.login);

// Route pour vérifier le token (protégée)
router.get('/verify', authMiddleware, authController.verifyToken);
// Changer le mot de passe
router.put('/change-password', authMiddleware, authController.changePassword);

module.exports = router;