import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import FacadeRenovation from "../Composant/Facade.jsx";
import  ImageFacade from "../Composant/CompareFacade.jsx"



export default function Toiture() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
    <FacadeRenovation />
    <div className="flex justify-center">
    < ImageFacade/>
    </div>
    <Footer />
    </>
  );
}
