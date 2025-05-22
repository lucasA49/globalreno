import Navbar from "../Composant/Navbar";
import Footer from "../Composant/Footer";

export default function Propos() {
  return (
    <>
      {/* Bannière d'annonce */}
      <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
        🎁 Parrainez un proche et recevez{" "}
        <span className="font-bold">500 € en cadeau</span> !
      </div>

      {/* Navbar */}
      <Navbar />

 
      {/* Description entreprise */}
      <div className="flex justify-center items-center px-4 py-16 min-h-[60vh]">
        <div className="bg-gray-400 rounded-lg p-6 w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
          <p className="text-sm sm:text-base md:text-lg text-justify break-words text-white leading-relaxed">
            Basée à Mazières-en-Mauges, la société Global Reno  <br />accompagne les
            particuliers dans leurs projets de rénovation de l’habitat. <br />
            Spécialisés dans le nettoyage et la rénovation de toiture, la
            rénovation de façade, <br /> ainsi que l’isolation thermique par
            l’extérieur et des combles, nous intervenons avec passion <br /> et rigueur
            sur chaque chantier. <br /> Notre démarche s’inscrit pleinement dans une
            logique   éco-responsable : <br /> en améliorant les performances
            énergétiques de votre maison, nous contribuons à réduire durablement
            votre consommation d’énergie et votre empreinte carbone. Parce que
            rénover, c’est aussi préserver la planète, nous privilégions des
            matériaux performants, respectueux de l’environnement et des
            techniques durables. Fièrement certifiée RGE <br /> (Reconnu Garant de
            l’Environnement) et Qualibat, Global Reno vous garantit des travaux
            de qualité, réalisés dans le respect des normes françaises et
            européennes, ouvrant droit aux aides financières pour la rénovation
            énergétique. <br /> 🔧 🌱 Global Reno, votre partenaire de confiance pour
            un habitat plus sain, plus performant, et plus respectueux de la
            nature.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
