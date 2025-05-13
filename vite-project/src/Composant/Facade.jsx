import { NavLink } from "react-router-dom";

export default function ToitureBody() {
  const problems = [
    {
      title: "Ma façade présente des traces de mousse",
      description:
        "Des mousses ou des traces de verdissure apparaissent sur votre façade ? Ne laissez pas la situation se dégrader : optez dès maintenant pour un démoussage efficace de votre façade.",
      image: "/maison_mouse.png",
      alt: "Mousse sur façade",
    },
    {
      title: "Mes murs présentent des marques d'humidité apparentes",
      description:
        "Des traces d’humidité ou des microfissures apparaissent sur vos murs extérieurs ? Ces signes peuvent révéler un problème structurel plus sérieux. Profitez d’une étude gratuite dès maintenant",
      image: "/maison_humide.png",
      alt: "Humidité sur murs",
    },
    {
      title: "Je souhaite remplacer le revêtement de ma façade",
      description:
        "Votre enduit montre des signes d’usure ? Vos murs présentent des irrégularités que vous aimeriez corriger ? Global Reno vous propose des solutions sur mesure pour un revêtement de façade esthétique et durable.",
      image: "/facade_abime.png",
      alt: "Revêtement de façade",
    },
    {
      title: "Je veux repeindre ma façade",
      description:
        "Votre façade a perdu de son éclat ou vous souhaitez simplement changer de couleur ? Optez pour un traitement hydrofuge qui redonne vie à votre façade tout en la protégeant durablement.",
      image: "/maison_peinture.png",
      alt: "Peinture de façade",
    },
    {
      title: "Ma façade est sale",
      description:
        "Des traces de salissures ou de pollution apparaissent sur vos murs extérieurs ? Offrez à votre façade un nettoyage complet pour lui redonner tout son éclat.",
      image: "/maison_sale.png",
      alt: "Façade sale",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex text-sm mb-6">
        <NavLink to="/">
          <span className="text-gray-500">Accueil</span>
        </NavLink>
        <span className="mx-2 text-gray-500">|</span>
        <span className="font-medium">Rénovation de Facade</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            Offrez à votre façade l'entretien qu'elle mérite. Nos experts en
            rénovation sont là pour redonner vie à vos murs extérieurs
          </h1>
          <div className="w-16 h-1 bg-green-500 mb-6"></div>
          <p className="text-gray-700">
            Nous vous accompagnons dans la rénovation de votre façade, qu’elle
            soit esthétique ou structurelle.
          </p>
        </div>
        <div className="">
          {/* Espace réservé pour la vidéo */}
          <div className=""></div>
        </div>
      </div>

      {/* Rôle section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-12">
          Pourquoi rénover ma façade ?
        </h3>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 bg-white shadow-sm"
            >
              {/* iciiii-green-500 */}
              <h4 className="text-lg font-bold mb-4 px-4 pt-4">
                {problem.title}
              </h4>
              <img
                src={problem.image}
                alt={problem.alt}
                className="w-full h-50 object-cover mb-4"
              />
              <p className="text-sm text-gray-700 px-4 mb-4">
                {problem.description}
              </p>
              <div className="px-4 pb-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
