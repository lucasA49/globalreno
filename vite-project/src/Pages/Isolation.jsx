import Navbar from "../Composant/Navbar.jsx";
import Footer from "../Composant/Footer.jsx";
import IsolationBody from "../Composant/BodyIsolation.jsx";
import FormulaireTravaux from "../Composant/FormulaireTravaux.jsx";
import SliderIsolation from "../Composant/SliderIsolation.jsx";
export default function Isolation() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
<IsolationBody/>
<div className="flex justify-center gap-15 "> 
<FormulaireTravaux/>
<SliderIsolation/>
</div>
      <Footer/>
    </>
  );
}
