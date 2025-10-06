import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  const fetchLatestArticles = async () => {
    try {
      const response = await api.get('/articles/latest?limit=3');
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Chargement des articles...</div>;
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Derniers Articles
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez nos conseils et actualités en rénovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.titre}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6">
                {article.categorie && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {article.categorie}
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.titre}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.contenu}
                </p>
                
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Lire la suite →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;