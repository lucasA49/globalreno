import Navbar from "../Composant/Navbar.jsx";
import Footer from "../Composant/Footer.jsx";
import IsolationBody from "../Composant/BodyIsolation.jsx";
import FormulaireTravaux from "../Composant/FormulaireTravaux.jsx";
import SliderIsolation from "../Composant/SliderIsolation.jsx";
import { Helmet } from "react-helmet";

export default function Isolation() {
  return (
    <>
    <Helmet>
  <title>Isolation thermique ITE & combles | Global Réno</title>
  <meta 
    name="description" 
    content="Améliorez le confort de votre maison avec une isolation performante. Global Réno intervient dans le Grand Ouest. ITE et isolation des combles certifiées RGE." 
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Isolation thermique ITE & combles | Global Réno" />
  <meta property="og:description" content="Réduisez vos pertes d’énergie avec une isolation extérieure ou dans les combles. Global Réno, expert certifié RGE dans le Grand Ouest." />
  <meta property="og:image" content="https://globalreno-renovation.fr/baniere-offre.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://globalreno-renovation.fr/isolation" />
  <link rel="canonical" href="https://globalreno-renovation.fr/isolation" />
</Helmet>
    <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
  🎁 Parrainez un proche et recevez <span className="font-bold">500 € en cadeau</span> !
</div>
      <Navbar />
        <div>

</div>
      <IsolationBody />
<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">    
        <FormulaireTravaux />
        <SliderIsolation />
      </div>
      <Footer />
    </>
  );
}
