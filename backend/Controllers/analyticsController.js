const Analytics = require('../Models/Analytics');
const geoip = require('geoip-lite');

// Enregistrer une visite
exports.trackVisit = async (req, res) => {
  try {
    const { page_url } = req.body;
    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get('user-agent');

    // Géolocalisation depuis l'IP
    let country = null;
    let city = null;
    let latitude = null;
    let longitude = null;

    // Nettoyer l'IP (enlever ::ffff: si présent)
    const cleanIp = ip_address.replace('::ffff:', '');
    
    const geo = geoip.lookup(cleanIp);
    if (geo) {
      country = geo.country;
      city = geo.city;
      latitude = geo.ll[0];
      longitude = geo.ll[1];
    }

    const visitData = {
      page_url,
      ip_address: cleanIp,
      country,
      city,
      latitude,
      longitude,
      user_agent
    };

    await Analytics.recordVisit(visitData);
    res.status(201).json({ message: 'Visite enregistrée' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Récupérer les statistiques
exports.getStats = async (req, res) => {
  try {
    const totalVisits = await Analytics.getTotalVisits();
    const uniqueVisitors = await Analytics.getUniqueVisitors();
    const visitsByPage = await Analytics.getVisitsByPage();
    const visitsByCountry = await Analytics.getVisitsByCountry();
    const visitsOverTime = await Analytics.getVisitsOverTime(30);

    res.status(200).json({
      totalVisits,
      uniqueVisitors,
      visitsByPage,
      visitsByCountry,
      visitsOverTime
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// Récupérer les visites récentes
exports.getRecentVisits = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const recentVisits = await Analytics.getRecentVisits(limit);
    res.status(200).json(recentVisits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};