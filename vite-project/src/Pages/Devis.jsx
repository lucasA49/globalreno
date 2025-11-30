import Navbar from "../Composant/Navbar.jsx";
import Form from "../Composant/Formulaire.jsx";
import Footer from "../Composant/Footer.jsx";
import { Helmet } from "react-helmet";

export default function Devis() {
  return (
    <>
      <Helmet>
        <title>Demandez votre devis gratuit | Global Réno</title>
        <meta
          name="description"
          content="Vous avez un projet de rénovation ? Remplissez notre formulaire en ligne et recevez rapidement un devis gratuit. Intervention dans tout le Grand Ouest."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Devis gratuit rénovation | Global Réno"
        />
        <meta
          property="og:description"
          content="Obtenez un devis personnalisé pour vos travaux de toiture, façade ou isolation. Réponse rapide, certifié RGE."
        />
        <meta
          property="og:image"
          content="https://globalreno-renovation.fr/baniere-offre.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://globalreno-renovation.fr/Contact"
        />
        <link rel="canonical" href="https://globalreno-renovation.fr/Contact" />
      </Helmet>

      <Navbar />
      <Form />
      <Footer />
    </>
  );
}
