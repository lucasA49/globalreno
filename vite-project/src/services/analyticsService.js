import api from './api';

export const trackPageView = async (pageUrl) => {
  try {
    await api.post('/analytics/track', {
      page_url: pageUrl
    });
  } catch (error) {
    console.error('Erreur lors du tracking:', error);
  }
};

export const getAnalyticsStats = async () => {
  try {
    const response = await api.get('/analytics/stats');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des stats:', error);
    throw error;
  }
};

export const getRecentVisits = async (limit = 20) => {
  try {
    const response = await api.get(`/analytics/recent?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des visites récentes:', error);
    throw error;
  }
};