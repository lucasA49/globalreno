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
<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 px-4">
      <RenovationForm/>
    < ImageFacade/>
    </div>      
    <Footer />
    </>
  );
}
