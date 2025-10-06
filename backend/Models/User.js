const db = require('../config/db');

class User {
  static async create(username, email, hashedPassword) {
    const [result] = await db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    return result;
  }

  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT id, username, email, created_at FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async updatePassword(id, hashedPassword) {
    const [result] = await db.query(
      'UPDATE users SET password = ? WHERE id = ?',
      [hashedPassword, id]
    );
    return result;
  }
}

module.exports = User;