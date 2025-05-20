import { NavLink } from "react-router-dom";

export default function IsolationBody() {
  const problems = [
    {
      title: "Ma maison est mal isolée : je ressens le froid ou la chaleur",
      description:
        "Des variations de température importantes dans votre logement ? Cela peut être dû à une isolation dégradée ou insuffisante. Une bonne isolation thermique vous garantit un confort optimal toute l’année, été comme hiver.",
      image: "/froid-chaud.png",
      alt: "Mousse sur façade",
    },
    {
      title: "Mes murs présentent des marques d'humidité apparentes",
      description:
        "Des traces d’humidité ou des microfissures apparaissent sur vos murs extérieurs ? Ces signes peuvent révéler un problème structurel plus sérieux. Profitez d’une étude gratuite dès maintenant",
      image: "/mur-humide.png",
      alt: "Humidité sur murs",
    },
    {
      title: " Mes factures de chauffage ou de climatisation sont trop élevées",
      description:
        "Une isolation inefficace entraîne des pertes d’énergie importantes. Grâce à l’isolation thermique par l’extérieur (ITE) ou des combles, réduisez significativement votre consommation d’énergie et vos dépenses.",
      image: "/ite.png",
      alt: "Revêtement de façade",
    },
    {
      title: "Je veux valoriser mon bien immobilier",
      description:
        "Une maison bien isolée est un vrai atout en cas de revente. Améliorez votre DPE (Diagnostic de Performance Énergétique) et augmentez la valeur de votre bien tout en le rendant plus économe et écologique.",
      image: "/maison_peinture.png",
      alt: "Peinture de façade",
    },
    {
      title: "Je souhaite isoler mes combles perdus ou aménageables",
      description:
        "Les combles sont responsables de 30 % des déperditions thermiques dans une maison mal isolée. Avec nos solutions performantes, gagnez en confort et réalisez des économies sur le long terme.",
      image: "/iso-comble.png",
      alt: "Façade sale",
    },
    {
      title:
        "Je ressens des courants d’air ou l’humidité dans certaines pièces",
      description:
        "Des parois froides, des murs humides, ou des zones inconfortables ? Ce sont souvent les signes d’une isolation thermique défaillante. Nos experts identifient les ponts thermiques et vous proposent une solution adaptée.",
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
        <span className="font-medium">Rénovation de l'isolation</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            Offrez à votre maison l'isolation qu'elle mérite. Nos experts en ITE
            et combles vous assurent confort et économies d'énergie
          </h1>
          <div className="w-16 h-1 bg-green-500 mb-6"></div>
          <p className="text-gray-700">
            Nous vous accompagnons dans l'isolation de vos combles et de
            l'extérieur, pour améliorer le confort thermique et réaliser des
            économies d'énergie.
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
          Pourquoi rénover mon isolation ?
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
                className="w-full h-72 object-cover mb-4"
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
