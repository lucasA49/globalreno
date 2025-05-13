import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import FacadeRenovation from "../Composant/Facade.jsx";
import  ImageFacade from "../Composant/CompareFacade.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";


export default function Facade() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
    <FacadeRenovation />
    <div className="flex justify-center gap-15 ">
      <RenovationForm/>
    < ImageFacade/>
    </div>
    <Footer />
    </>
  );
}
