import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import api from '../services/api';

const ArticlesForm = () => {
  const [formData, setFormData] = useState({
    titre: '',
    contenu: '',
    image_url: '',
    categorie: '',
    status: 'brouillon'
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await api.get(`/articles/${id}`);
      setFormData(response.data);
      if (response.data.image_url) {
        setImagePreview(response.data.image_url);
      }
    } catch (err) {
      setError('Erreur lors du chargement de l\'article');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('L\'image ne doit pas dépasser 5MB');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Format d\'image non autorisé. Utilisez: JPG, PNG, GIF ou WebP');
        return;
      }

      setImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError('');
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFormData(prev => ({
      ...prev,
      image_url: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submitData = new FormData();
      submitData.append('titre', formData.titre);
      submitData.append('contenu', formData.contenu);
      submitData.append('categorie', formData.categorie || '');
      submitData.append('status', formData.status);
      
      if (imageFile) {
        submitData.append('image', imageFile);
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      if (isEditMode) {
        if (formData.image_url && !imageFile) {
          submitData.append('old_image_url', formData.image_url);
        }
        await api.put(`/articles/${id}`, submitData, config);
      } else {
        await api.post('/articles', submitData, config);
      }
      
      navigate('/admin/articles');
    } catch (err) {
      console.error('Erreur complète:', err);
      setError(err.response?.data?.message || err.message || 'Erreur lors de l\'enregistrement');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {isEditMode ? 'Modifier l\'article' : 'Créer un article'}
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin/articles')}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Retour
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="titre" className="block text-sm font-semibold text-gray-700 mb-2">
                Titre *
              </label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Titre de l'article"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image de l'article
              </label>
              
              {imagePreview && (
                <div className="mb-4 relative">
                  <img 
                    src={imagePreview} 
                    alt="Aperçu" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour uploader</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF ou WebP (MAX. 5MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="contenu" className="block text-sm font-semibold text-gray-700 mb-2">
                Contenu *
              </label>
              <textarea
                id="contenu"
                name="contenu"
                value={formData.contenu}
                onChange={handleChange}
                required
                rows="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Contenu de l'article..."
              />
            </div>

            <div>
              <label htmlFor="categorie" className="block text-sm font-semibold text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                id="categorie"
                name="categorie"
                value={formData.categorie}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="toiture">Toiture</option>
                <option value="isolation">Isolation</option>
                <option value="facade">Façade</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                Statut
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              >
                <option value="brouillon">Brouillon</option>
                <option value="publie">Publié</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Enregistrement...' : isEditMode ? 'Mettre à jour' : 'Créer l\'article'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin/articles')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ArticlesForm;