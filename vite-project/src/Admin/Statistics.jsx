import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { getAnalyticsStats, getRecentVisits } from '../services/analyticsService';

const Statistics = () => {
  const [stats, setStats] = useState(null);
  const [recentVisits, setRecentVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [statsData, visitsData] = await Promise.all([
        getAnalyticsStats(),
        getRecentVisits(20)
      ]);
      setStats(statsData);
      setRecentVisits(visitsData);
    } catch (err) {
      setError('Erreur lors du chargement des statistiques');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Chargement des statistiques...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Statistiques</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Cartes de statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total des visites */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Total des visites</h3>
            <p className="text-3xl font-bold text-gray-800">{stats?.totalVisits || 0}</p>
          </div>

          {/* Visiteurs uniques */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Visiteurs uniques</h3>
            <p className="text-3xl font-bold text-gray-800">{stats?.uniqueVisitors || 0}</p>
          </div>

          {/* Pages les plus visitées */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Page populaire</h3>
            <p className="text-xl font-bold text-gray-800">
              {stats?.visitsByPage?.[0]?.page_url || 'N/A'}
            </p>
            <p className="text-sm text-gray-500">{stats?.visitsByPage?.[0]?.visits || 0} visites</p>
          </div>

          {/* Pays principal */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Pays principal</h3>
            <p className="text-xl font-bold text-gray-800">
              {stats?.visitsByCountry?.[0]?.country || 'N/A'}
            </p>
            <p className="text-sm text-gray-500">{stats?.visitsByCountry?.[0]?.visits || 0} visites</p>
          </div>
        </div>

        {/* Graphique des visites dans le temps */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Visites des 30 derniers jours</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {stats?.visitsOverTime?.map((day, index) => {
              const maxVisits = Math.max(...stats.visitsOverTime.map(d => d.visits));
              const height = (day.visits / maxVisits) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 hover:bg-blue-600 rounded-t transition-all"
                    style={{ height: `${height}%`, minHeight: '4px' }}
                    title={`${day.date}: ${day.visits} visites`}
                  />
                  <span className="text-xs text-gray-500 mt-2 transform rotate-45 origin-left">
                    {new Date(day.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pages les plus visitées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Pages les plus visitées</h2>
            <div className="space-y-3">
              {stats?.visitsByPage?.map((page, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{page.page_url}</span>
                  <span className="font-semibold text-blue-600">{page.visits}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pays des visiteurs */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Visites par pays</h2>
            <div className="space-y-3">
              {stats?.visitsByCountry?.map((country, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{country.country || 'Inconnu'}</span>
                  <span className="font-semibold text-green-600">{country.visits}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visites récentes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Visites récentes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Page</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Pays</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Ville</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">IP</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentVisits.map((visit, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">{visit.page_url}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{visit.country || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{visit.city || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 font-mono">{visit.ip_address}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {new Date(visit.visited_at).toLocaleString('fr-FR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;