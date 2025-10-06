import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Bonjour, {user?.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Articles */}
          <Link 
            to="/admin/articles"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-green-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Articles</h2>
            <p className="text-gray-600 mb-4">Gérer les articles du site</p>
            <span className="text-green-600 font-semibold hover:text-green-700">
              Accéder →
            </span>
          </Link>

          {/* Card Créer un article */}
          <Link 
            to="/admin/articles/new"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Nouvel Article</h2>
            <p className="text-gray-600 mb-4">Créer un nouvel article</p>
            <span className="text-blue-600 font-semibold hover:text-blue-700">
              Créer →
            </span>
          </Link>

          {/* Card Changer mot de passe */}
          <Link 
            to="/admin/change-password"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-purple-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Mot de passe</h2>
            <p className="text-gray-600 mb-4">Changer mon mot de passe</p>
            <span className="text-purple-600 font-semibold hover:text-purple-700">
              Modifier →
            </span>
          </Link>

          {/* Card Statistiques */}
          <Link 
            to="/admin/statistics"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-yellow-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Statistiques</h2>
            <p className="text-gray-600 mb-4">Voir les visites et analytics</p>
            <span className="text-yellow-600 font-semibold hover:text-yellow-700">
              Voir →
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;