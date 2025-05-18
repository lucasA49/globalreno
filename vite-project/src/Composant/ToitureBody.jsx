import { NavLink } from "react-router-dom";

export default function ToitureBody() {
  const problems = [
    {
      title: "Ma toiture est envahie par la mousse et les lichens",
      description:
        "La présence de mousses ou de végétation sur votre toit peut abîmer les tuiles et provoquer des infiltrations. Un démoussage régulier prolonge la durée de vie de votre toiture et améliore son efficacité thermique.",
      image: "/maison_mouse.png",
      alt: "Mousse sur façade",
    },
    {
      title: "J’ai des fuites d’eau ou des traces d’humidité au plafond",
      description:
        "Des infiltrations dans la maison sont souvent le signe d’une toiture endommagée ou mal étanchéifiée. Une intervention rapide permet d’éviter des dégâts plus importants à l’intérieur de votre logement.",
      image: "/maison_humide.png",
      alt: "Humidité sur murs",
    },
    {
      title: "Mes tuiles sont cassées, déplacées ou abîmées",
      description:
        "Des tuiles dégradées exposent votre habitation aux intempéries. Grâce à une rénovation ciblée ou partielle, vous redonnez à votre toit toute sa protection sans refaire toute la toiture.",
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
      title: "Je veux améliorer l’isolation de mon toit",
      description:
        "Une toiture mal isolée peut représenter  jusqu’à 30 % des déperditions thermiques. Avec l’isolation par l’extérieur (sarking) ou l’intérieur, réduisez vos factures et améliorez votre confort toute l’année.",
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
        <span className="font-medium">Rénovation de Toiture</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            Offrez à votre toiture l'entretien qu'elle mérite. Nos experts en
            rénovation sont là pour protéger votre maison contre les intempéries
          </h1>
          <div className="w-16 h-1 bg-green-500 mb-6"></div>
          <p className="text-gray-700">
            Nos solutions de rénovation garantissent sécurité et durabilité pour
            votre toiture
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
          Pourquoi rénover ma Toiture ?
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
