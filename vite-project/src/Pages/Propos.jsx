import Navbar from "../Composant/Navbar";
import Footer from "../Composant/Footer";

export default function Propos() {
  return (
    <>
      {/* Bannière d'annonce */}
      <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
        🎁 Parrainez un proche et recevez <span className="font-bold">500 € en cadeau</span> !
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Bannière d’image */}
      <div>
        {/* Image pour ordinateur */}
        <img
          src="baniere-offre.png"
          alt="Offre Global Reno"
          className="w-full min-h-[300px] max-h-[1000px] object-cover hidden sm:block"
        />

        {/* Image pour mobile */}
        <img
          src="/baniere_kdo1_mobile.png"
          alt="Offre Global Reno mobile"
          className="w-full min-h-[300px] max-h-[1000px] object-cover block sm:hidden"
        />
      </div>

  

      {/* Description entreprise */}
    <div className="flex justify-center items-center px-4 py-16 min-h-[60vh]">
  <div className="bg-gray-400 rounded-lg p-6 w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
    <p className="text-sm sm:text-base md:text-lg text-justify break-words text-white leading-relaxed">
      Chez Global Reno, nous mettons notre savoir-faire au service de votre habitat. <br />
      Spécialistes de la rénovation de toiture, de façade et de l’isolation extérieure, <br />
      nous vous accompagnons dans vos projets avec des solutions durables, esthétiques et performantes. <br /> 🏡
      Redonnez vie à votre maison tout en améliorant son confort et sa valeur. <br />
      Nos équipes certifiées interviennent avec rigueur et professionnalisme, dans le respect des normes françaises
      et européennes, pour garantir des résultats à la hauteur de vos attentes. <br />
      👉 Faites le choix de la qualité et de la tranquillité avec Global Reno.
    </p>
  </div>
</div>


      {/* Footer */}
      <Footer />
    </>
  );
}
