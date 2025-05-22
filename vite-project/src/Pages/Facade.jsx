import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import FacadeRenovation from "../Composant/Facade.jsx";
import ImageFacade from "../Composant/CompareFacade.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";

export default function Facade() {
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
   
      <FacadeRenovation />
<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">    
      <RenovationForm />
        <ImageFacade />
      </div>
      <Footer />
    </>
  );
}
