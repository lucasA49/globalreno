import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const panels = [
  {
    title: "Toiture",
    description:
      "Redonnez une seconde jeunesse à vos tuiles et ardoises grâce aux produits exclusifs de Technitoit, le spécialiste de la toiture en France.",
    image: "rge.png",
    link: "/toiture",
  },
  {
    title: "Façade",
    description: "Protégez et embellissez votre façade avec nos solutions durables.",
    image: "fabrication-francaise.png",
    link: "/facade",
  },
  {
    title: "Isolation",
    description: "Améliorez votre confort thermique et réalisez des économies d’énergie.",
    image: "/apres_maison.jpg",
    link: "/isolation",
  },
  {
    title: "Fenêtres",
    description: "Optimisez la lumière naturelle et l’isolation de votre maison.",
    image: "ultima.png",
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
          className={`relative z-[0] w-full sm:w-1/2 md:w-1/4 cursor-pointer transition-all duration-500 ease-in-out transform ${
            index === activeIndex ? "scale-110" : "scale-100"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {/* Image */}
          <img
            src={panel.image}
            alt={panel.title}
            className="w-full h-full object-cover border-0.5 z-3"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 
              ${index === activeIndex ? "opacity-0" : "bg-gray-500 opacity-30"}`}
          ></div>

          {/* Contenu actif avec fond gris et arrondi */}
          {index === activeIndex && (
            <div className="absolute inset-0 z-30 flex justify-center items-center p-4 sm:p-6">
              <div className="bg-gray-200 bg-opacity-10 rounded-lg p-4 w-full max-w-xs sm:max-w-md text-gray-500 break-words">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{panel.title}</h2>
                <p className="mb-6">{panel.description}</p>
                <NavLink
                  to={panel.link}
                  className="border px-4 py-2 text-black-50 hover:text-black-50 transition"
                >
                  découvrir
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagePanels;
