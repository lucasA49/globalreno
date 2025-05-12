import Footer from "../Composant/Footer.jsx";
import Navbar from "../Composant/Navbar.jsx";
import RenovationForm from "../Composant/RenovationForm.jsx";
export default function Toiture() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
  <RenovationForm/>
    <Footer />
    </>
  );
}
