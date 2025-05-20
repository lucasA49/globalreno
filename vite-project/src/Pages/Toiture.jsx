import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import ToitureBody from "../Composant/ToitureBody.jsx";
import RenovationForm from "../Composant/FormulaireTravaux.jsx";
import ImageFacade from "../Composant/SliderToiture.jsx";

export default function Toiture() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
      <ToitureBody/>
<div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">    
      <RenovationForm/>
    < ImageFacade/>
    </div>      
    <Footer />
    </>
  );
}
