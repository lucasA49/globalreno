const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../config/multer');

// Récupérer les derniers articles (publics) - DOIT ÊTRE AVANT /:id
router.get('/latest', articleController.getLatestArticles);

// Créer un article avec upload d'image
router.post('/', authMiddleware, upload.single('image'), articleController.createArticle);

// Récupérer tous les articles
router.get('/', articleController.getAllArticles);

// Récupérer un article par ID
router.get('/:id', articleController.getArticleById);

// Mettre à jour un article avec upload d'image
router.put('/:id', authMiddleware, upload.single('image'), articleController.updateArticle);

// Supprimer un article
router.delete('/:id', authMiddleware, articleController.deleteArticle);

module.exports = router;