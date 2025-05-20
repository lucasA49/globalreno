import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import FacadeRenovation from "../Composant/Facade.jsx";
import ImageFacade from "../Composant/CompareFacade.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";

export default function Facade() {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="bankdo.png"
          className="w-full h-full "
          alt=""
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
