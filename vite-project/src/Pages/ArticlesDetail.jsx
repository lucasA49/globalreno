import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../Composant/Navbar";
import Footer from "../Composant/Footer";

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await api.get(`/articles/${id}`);
      if (response.data.status !== "publie") {
        navigate("/articles");
        return;
      }
      setArticle(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'article", error);
      navigate("/articles");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Chargement...</p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Image de couverture */}
      {article.image_url && (
        <div className="w-full h-96 overflow-hidden">
          <img
            src={article.image_url}
            alt={article.titre}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Contenu de l'article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/articles")}
          className="text-green-600 hover:text-green-700 font-semibold mb-6 inline-flex items-center"
        >
          ← Retour aux articles
        </button>

        {/* Catégorie */}
        {article.categorie && (
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            {article.categorie}
          </span>
        )}

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {article.titre}
        </h1>

        {/* Date */}
        <p className="text-gray-500 mb-8">
          Publié le{" "}
          {new Date(article.date_creation).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {article.contenu}
          </div>
        </div>

        {/* Bouton contact */}
        <div className="mt-12 p-8 bg-green-50 rounded-xl border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Besoin de nos services ?
          </h3>
          <p className="text-gray-600 mb-4">
            Contactez-nous pour obtenir un devis gratuit pour votre projet de
            rénovation.
          </p>
          <button
            onClick={() => navigate("/Contact")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Demander un devis
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
