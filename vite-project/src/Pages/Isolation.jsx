import Navbar from "../Composant/Navbar.jsx";
import Footer from "../Composant/Footer.jsx";
import IsolationBody from "../Composant/BodyIsolation.jsx";
import FormulaireTravaux from "../Composant/FormulaireTravaux.jsx";
import SliderIsolation from "../Composant/SliderIsolation.jsx";
export default function Isolation() {
  return (
    <>
    <div className="bg-yellow-400 text-black text-center text-sm md:text-base py-2 px-4 w-full">
  🎁 Parrainez un proche et recevez <span className="font-bold">500 € en cadeau</span> !
</div>
      <Navbar />
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
      <IsolationBody />
<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">    
        <FormulaireTravaux />
        <SliderIsolation />
      </div>
      <Footer />
    </>
  );
}
