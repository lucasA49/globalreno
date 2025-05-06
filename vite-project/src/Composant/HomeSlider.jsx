import React, { useState } from "react";
const panels = [
  {
    title: "Toiture",
    description: "Redonnez une seconde jeunesse à vos tuiles et ardoises grâce aux produits exclusifs de Technitoit, le spécialiste de la toiture en France.",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Façade",
    description: "Protégez et embellissez votre façade avec nos solutions durables.",
    image: "/fabrication-francaise.png",
  },
  {
    title: "Isolation",
    description: "Améliorez votre confort thermique et réalisez des économies d’énergie.",
    image: "/img3.jpg",
  },
  {
    title: "Fenêtres",
    description: "Optimisez la lumière naturelle et l’isolation de votre maison.",
    image: "/img4.jpg",
  },
];

const ImagePanels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-[600px] overflow-hidden">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`relative flex-1 bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${
            index === activeIndex ? "flex-[2]" : "flex-1"
          }`}
          style={{ backgroundImage: `url(${panel.image})` }}
          onClick={() => setActiveIndex(index)}
        >
          {/* Overlay foncé sur tous sauf actif */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === activeIndex ? "bg-black bg-opacity-60" : "bg-black bg-opacity-30"
            }`}
          ></div>

          {/* Contenu uniquement sur l’actif */}
          {index === activeIndex && (
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start p-6 text-white">
              <h2 className="text-3xl font-bold mb-4">{panel.title}.</h2>
              <p className="mb-6 max-w-xs">{panel.description}</p>
              <button className="border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white transition">
                découvrir
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagePanels;
