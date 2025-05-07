import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const panels = [
  {
    title: "Toiture",
    description:
      "Redonnez une seconde jeunesse à vos tuiles et ardoises grâce aux produits exclusifs de Technitoit, le spécialiste de la toiture en France.",
    image: "/rge.png",
    link: "/toiture",
  },
  {
    title: "Façade",
    description:
      "Protégez et embellissez votre façade avec nos solutions durables.",
    image: "/fabrication-francaise.png",
    link: "/facade",
  },
  {
    title: "Isolation",
    description:
      "Améliorez votre confort thermique et réalisez des économies d’énergie.",
    image: "/img3.jpg",
    link: "/isolation",
  },
  {
    title: "Fenêtres",
    description:
      "Optimisez la lumière naturelle et l’isolation de votre maison.",
    image: "/img4.jpg",
    link: "/fenetres",
  },
];

const ImagePanels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap h-auto overflow-hidden">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`relative w-full sm:w-1/2 md:w-1/4 cursor-pointer transition-all duration-500 ease-in-out transform ${
            index === activeIndex ? "scale-110" : "scale-100"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {/* Affichage de l'image */}
          <img
            src={panel.image}
            alt={panel.title}
            className="w-full h-full object-cover border-2 border-red-500 z-0"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === activeIndex
                ? "bg-black bg-opacity-40 z-20"
                : "bg-black bg-opacity-30 z-10"
            }`}
          ></div>

          {/* Contenu actif */}
          {index === activeIndex && (
            <div className="absolute inset-0 z-30 flex flex-col justify-center items-start p-4 sm:p-6 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{panel.title}</h2>
              <p className="mb-6 max-w-xs sm:max-w-md">{panel.description}</p>
              <NavLink
                to={panel.link}
                className="border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                découvrir
              </NavLink>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagePanels;
