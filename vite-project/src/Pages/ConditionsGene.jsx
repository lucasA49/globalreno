import Navbar from "../Composant/Navbar.jsx";
import Footer from "../Composant/Footer.jsx"
import Cgv from "../Composant/Cgv.jsx";

export default function Devis() {
  return (
    <>
    <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
  🎁 Parrainez un proche et recevez <span className="font-bold">500 € en cadeau</span> !
</div>
      <Navbar />
      <Cgv/>
      <Footer/>
    </>
  );
}
