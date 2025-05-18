import Navbar from "../Composant/Navbar.jsx";
import ImagePanels from "../Composant/HomeSlider.jsx";
import HomeSlider from "../Composant/CompareImg.jsx";
import Carousel from "../Composant/Carousel.jsx";
import Footer from "../Composant/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
        <img
          src="baniere-maison.jpeg"
          className="w-full h-[150px] object-cover"
          alt="bannière"
        />
      </div>

      {/* Titre + Logos */}
      <div className="px-4 md:px-20 pt-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-lg font-semibold mb-4 md:mb-0">
            L'expérience Global Reno
          </h1>
          <div className="flex flex-wrap justify-end gap-2 md:gap-4">
            <img
              src="entreprise-fr.png"
              alt="entreprise-fr"
              className="h-10 md:h-16 w-auto"
            />
            <img
              src="fabrication-francaise.png"
              alt="fabrication-francaise"
              className="h-10 md:h-16 w-auto"
            />
            <img src="rge.png" alt="logo_rge" className="h-10 md:h-16 w-auto" />
            <img
              src="fabrication-francaise.png"
              alt="fabrication-francaise"
              className="h-10 md:h-16 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Texte au-dessus du slider */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-6 px-4">
        <div className="bg-gray-400 rounded-lg p-4 w-full md:w-[40%]">
          <p className="text-sm md:text-base text-justify break-words">
            Chez Global Reno, nous mettons notre savoir-faire au service de
            votre habitat. <br /> Spécialistes de la rénovation de toiture, de façade
            et de l’isolation extérieure, <br /> 
            nous vous accompagnons dans vos
            projets avec des solutions durables, esthétiques et performantes. <br /> 🏡
            Redonnez vie à votre maison tout en améliorant son confort et sa
            valeur. <br /> Nos équipes certifiées interviennent avec rigueur et
            professionnalisme, dans le respect des normes françaises et
            européennes, pour garantir des résultats à la hauteur de vos
            attentes.  <br />👉 Faites le choix de la qualité et de la tranquillité
            avec Global Reno.
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <HomeSlider />
        </div>
      </div>

      {/* Présentations */}
      <div className="mt-20 mb-20">
        <h2 className="text-center text-lg md:text-xl font-semibold mb-6">
          Découvrez nos présentations
        </h2>
        <ImagePanels />
      </div>

      <div>
        <Carousel />
      </div>

      <Footer />
    </>
  );
}
