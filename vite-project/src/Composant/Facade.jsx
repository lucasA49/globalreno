import { useState } from 'react';

export default function FacadeRenovation() {
  const [activeTab, setActiveTab] = useState('RÔLE');
  
  const tabs = ['RÔLE', 'EXPERTISE', 'COÛT', 'AVANTAGES'];
  
  const problems = [
    {
      title: "J'ai de la mousse sur ma façade",
      description: "Des mousses ou des premières verdissures commencent à apparaître sur votre façade ? N'attendez pas que la situation empire et procédez à un démoussage de votre façade.",
      cta: "En savoir plus sur le démoussage façade",
      image: "/koala.jpg",
      alt: "Mousse sur façade"
    },
    {
      title: "J'ai de l'humidité sur mes murs",
      description: "Vous remarquez des traces d'humidité sur vos murs extérieurs ? Des fissures ou micro-fissures commencent à être visibles ? Tout cela peut être le signe d'un problème plus grave. Demandez votre étude gratuite rapidement.",
      cta: "En savoir plus sur le traitement d'humidité",
      image: "/api/placeholder/300/200",
      alt: "Humidité sur murs"
    },
    {
      title: "Je veux changer mon revêtement de façade",
      description: "Votre enduit est vieillissant ? Vos murs sont irréguliers et vous souhaiteriez les uniformiser ? Découvrez les solutions proposées par Technibal pour un nouveau revêtement de façade.",
      cta: "En savoir plus sur la rénovation des revêtements de façade",
      image: "/api/placeholder/300/200",
      alt: "Revêtement de façade"
    },
    {
      title: "Je veux repeindre ma façade",
      description: "La couleur de votre façade a perdu de son éclat ou vous souhaitez simplement une nouvelle couleur ? Technibal vous propose l'hydrofuge façade, qui, en plus de redonner vie à votre façade, la protégera de longues années.",
      cta: "En savoir plus sur l'hydrofuge façade",
      image: "/api/placeholder/300/200",
      alt: "Peinture de façade"
    },
    {
      title: "Ma façade est sale",
      description: "Vous remarquez des traces de salissures ou de pollutions sur vos murs extérieurs ? Pourquoi ne pas procéder à un nettoyage complet de la façade ?",
      cta: "En savoir plus sur le nettoyage façade",
      image: "/api/placeholder/300/200",
      alt: "Façade sale"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex text-sm mb-6">
        <span className="text-gray-500">Accueil</span>
        <span className="mx-2 text-gray-500">|</span>
        <span className="font-medium">Rénovation de façade</span>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-2 font-medium ${
                activeTab === tab ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            L'entretien d'une façade de maison, quand cela est nécessaire, passe par la rénovation de la façade.
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <p className="text-gray-700">
            Qu'il soit seulement esthétique ou structurelle, Technibal vous accompagne dans votre projet.
          </p>
        </div>
        <div className="md:w-1/2 bg-orange-500 h-6 flex items-center justify-center">
          {/* Espace réservé pour la vidéo */}
          <div className="text-white text-lg font-medium">
            Espace réservé pour la vidéo
          </div>
        </div>
      </div>

      {/* Rôle section */}
      <div className="mb-12">
        <h2 className="text-orange-500 uppercase text-center tracking-wide font-medium mb-6">
          RÔLE
        </h2>
        <h3 className="text-2xl font-bold text-center mb-12">
          Pourquoi rénover ma façade ?
        </h3>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="border-l-4 border-green-500 bg-white shadow-sm">    
            {/* iciiii-green-500 */}
              <h4 className="text-lg font-bold mb-4 px-4 pt-4">
                {problem.title}
              </h4>
              <img 
                src={problem.image} 
                alt={problem.alt} 
                className="w-full h-40 object-cover mb-4" 
              />
              <p className="text-sm text-gray-700 px-4 mb-4">
                {problem.description}
              </p>
              <div className="px-4 pb-4">
                <a 
                  href="#" 
                  className="text-orange-500 text-sm font-medium hover:underline flex items-center"
                >
                  {problem.cta} 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}