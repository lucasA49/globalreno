const Article = require('../Models/Articles');
const path = require('path');
const fs = require('fs');

// Créer un article avec upload d'image
exports.createArticle = async (req, res) => {
  try {
    const { titre, contenu, categorie, status } = req.body;
    const auteur_id = req.user.id;

    const image_url = req.file 
      ? `${req.protocol}://${req.get('host')}/uploads/articles/${req.file.filename}`
      : null;

    const articleData = {
      titre,
      contenu,
      image_url,
      categorie,
      status: status || 'brouillon',
      auteur_id
    };

    const result = await Article.create(articleData);
    res.status(201).json({ 
      message: 'Article créé avec succès', 
      articleId: result.insertId,
      image_url 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Récupérer tous les articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Récupérer un article par ID
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Mettre à jour un article avec upload d'image
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, contenu, categorie, status, old_image_url } = req.body;

    const oldArticle = await Article.findById(id);

    let image_url;
    if (req.file) {
      image_url = `${req.protocol}://${req.get('host')}/uploads/articles/${req.file.filename}`;
      
      if (oldArticle && oldArticle.image_url) {
        const oldImagePath = oldArticle.image_url.split('/uploads/')[1];
        const fullPath = path.join(__dirname, '..', 'uploads', oldImagePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      }
    } else {
      image_url = old_image_url || oldArticle?.image_url;
    }

    const articleData = {
      titre,
      contenu,
      image_url,
      categorie,
      status
    };

    const result = await Article.update(id, articleData);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    
    res.status(200).json({ message: 'Article mis à jour avec succès', image_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Supprimer un article (avec son image)
exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    
    const article = await Article.findById(id);
    
    const result = await Article.delete(id);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }

    if (article && article.image_url) {
      const imagePath = article.image_url.split('/uploads/')[1];
      const fullPath = path.join(__dirname, '..', 'uploads', imagePath);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    }
    
    res.status(200).json({ message: 'Article supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Récupérer les derniers articles publiés (pour la page d'accueil)
exports.getLatestArticles = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    const [rows] = await Article.findLatest(limit);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};