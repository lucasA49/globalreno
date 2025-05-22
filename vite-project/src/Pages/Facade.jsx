import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import FacadeRenovation from "../Composant/Facade.jsx";
import ImageFacade from "../Composant/CompareFacade.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";
import { Helmet } from "react-helmet";

export default function Facade() {
  return (
    
    <>
    <Helmet>
  <title>Rénovation de façade maison | Global Réno</title>
  <meta 
    name="description" 
    content="Nettoyage, peinture ou enduit de façade ? Global Réno redonne vie à vos murs extérieurs dans tout le Grand Ouest. Résultats durables et certifiés." 
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Rénovation de façade | Global Réno" />
  <meta property="og:description" content="Confiez la rénovation de votre façade à Global Réno : nettoyage, peinture, traitement anti-humidité. Intervention dans le Grand Ouest, certifié RGE." />
  <meta property="og:image" content="https://globalreno-renovation.fr/baniere-offre.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://globalreno-renovation.fr/facade" />
  <link rel="canonical" href="https://globalreno-renovation.fr/facade" />
</Helmet>
    <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
  🎁 Parrainez un proche et recevez <span className="font-bold">500 € en cadeau</span> !
</div>
      <Navbar />
      <div>

</div>
   
      <FacadeRenovation />
<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">    
      <RenovationForm />
        <ImageFacade />
      </div>
      <Footer />
    </>
  );
}
