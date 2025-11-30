import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../Composant/Navbar";
import Footer from "../Composant/Footer";

const ArticlesPublic = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await api.get("/articles");
      // Filtrer seulement les articles publiés
      const publishedArticles = response.data.filter(
        (article) => article.status === "publie"
      );
      setArticles(publishedArticles);
    } catch (error) {
      console.error("Erreur lors du chargement des articles", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter((article) => article.categorie === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Chargement des articles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Articles</h1>
          <p className="text-xl text-green-100">
            Découvrez nos conseils et actualités sur la rénovation
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "all"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter("toiture")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "toiture"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Toiture
          </button>
          <button
            onClick={() => setFilter("isolation")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "isolation"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Isolation
          </button>
          <button
            onClick={() => setFilter("facade")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "facade"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Façade
          </button>
        </div>

        {/* Liste des articles */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              Aucun article disponible pour le moment
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.titre}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* Contenu */}
                <div className="p-6">
                  {/* Catégorie */}
                  {article.categorie && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {article.categorie}
                    </span>
                  )}

                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.titre}
                  </h3>

                  {/* Contenu (extrait) */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.contenu}
                  </p>

                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(article.date_creation).toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>

                  {/* Bouton Lire plus */}
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                  >
                    Lire plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ArticlesPublic;
