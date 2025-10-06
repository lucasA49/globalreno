const db = require('../config/db');

class Analytics {
  static async recordVisit(visitData) {
    const { page_url, ip_address, country, city, latitude, longitude, user_agent } = visitData;
    const [result] = await db.query(
      'INSERT INTO analytics (page_url, ip_address, country, city, latitude, longitude, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [page_url, ip_address, country, city, latitude, longitude, user_agent]
    );
    return result;
  }

  static async getTotalVisits() {
    const [rows] = await db.query('SELECT COUNT(*) as total FROM analytics');
    return rows[0].total;
  }

  static async getVisitsByPage() {
    const [rows] = await db.query(
      'SELECT page_url, COUNT(*) as visits FROM analytics GROUP BY page_url ORDER BY visits DESC LIMIT 10'
    );
    return rows;
  }

  static async getVisitsByCountry() {
    const [rows] = await db.query(
      'SELECT country, COUNT(*) as visits FROM analytics WHERE country IS NOT NULL GROUP BY country ORDER BY visits DESC LIMIT 10'
    );
    return rows;
  }

  static async getRecentVisits(limit = 20) {
    const [rows] = await db.query(
      'SELECT * FROM analytics ORDER BY visited_at DESC LIMIT ?',
      [limit]
    );
    return rows;
  }

  static async getVisitsOverTime(days = 30) {
    const [rows] = await db.query(
      'SELECT DATE(visited_at) as date, COUNT(*) as visits FROM analytics WHERE visited_at >= DATE_SUB(NOW(), INTERVAL ? DAY) GROUP BY DATE(visited_at) ORDER BY date',
      [days]
    );
    return rows;
  }

  static async getUniqueVisitors() {
    const [rows] = await db.query('SELECT COUNT(DISTINCT ip_address) as unique_visitors FROM analytics');
    return rows[0].unique_visitors;
  }
}

module.exports = Analytics;