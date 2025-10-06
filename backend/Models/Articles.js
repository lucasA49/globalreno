const db = require('../config/db');

class Article {
  static async create(articleData) {
    const { titre, contenu, image_url, categorie, status, auteur_id } = articleData;
    const [result] = await db.query(
      'INSERT INTO articles (titre, contenu, image_url, categorie, status, auteur_id) VALUES (?, ?, ?, ?, ?, ?)',
      [titre, contenu, image_url, categorie, status, auteur_id]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await db.query('SELECT * FROM articles ORDER BY date_creation DESC');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM articles WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, articleData) {
    const { titre, contenu, image_url, categorie, status } = articleData;
    const [result] = await db.query(
      'UPDATE articles SET titre = ?, contenu = ?, image_url = ?, categorie = ?, status = ? WHERE id = ?',
      [titre, contenu, image_url, categorie, status, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM articles WHERE id = ?', [id]);
    return result;
  }

  static async findLatest(limit) {
    return await db.query(
      'SELECT * FROM articles WHERE status = "publie" ORDER BY date_creation DESC LIMIT ?',
      [limit]
    );
  }
}

module.exports = Article;