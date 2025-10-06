const express = require('express');
const router = express.Router();
const analyticsController = require('../Controllers/analyticsController');
const authMiddleware = require('../middleware/authMiddleware');

// Route publique pour tracker les visites
router.post('/track', analyticsController.trackVisit);

// Routes protégées pour l'admin
router.get('/stats', authMiddleware, analyticsController.getStats);
router.get('/recent', authMiddleware, analyticsController.getRecentVisits);

module.exports = router;