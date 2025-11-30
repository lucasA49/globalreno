import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import ToitureBody from "../Composant/ToitureBody.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";
import ImageFacade from "../Composant/SliderToiture.jsx";
import { Helmet } from "react-helmet";

export default function Toiture() {
  return (
    <>
      <Helmet>
        <title>Rénovation de Toiture | Global Réno</title>
        <meta
          name="description"
          content="Confiez la rénovation ou le nettoyage de votre toiture à Global Réno. Intervention dans tout le Grand Ouest. Devis gratuit, certification RGE."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Rénovation de toiture | Global Réno"
        />
        <meta
          property="og:description"
          content="Toiture endommagée ou encrassée ? Faites confiance à Global Réno, expert certifié RGE, pour redonner vie à votre toit dans le Grand Ouest."
        />
        <meta
          property="og:image"
          content="https://globalreno-renovation.fr/baniere-offre.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://globalreno-renovation.fr/toiture"
        />
        <link rel="canonical" href="https://globalreno-renovation.fr/toiture" />
      </Helmet>

      <Navbar />
      <div>{/* Image pour ordinateur */}</div>
      <ToitureBody />
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">
        <RenovationForm />
        <ImageFacade />
      </div>
      <Footer />
    </>
  );
}
