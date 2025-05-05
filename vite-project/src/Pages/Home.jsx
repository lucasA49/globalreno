import Navbar from "../Composant/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img src="baniere-maison.jpeg" className="w-full  h-150" alt="" />
      </div>
        <h1 className="w-60 h-10 ml-20  mt-10 text-1g">L'expérience Global Reno</h1>
      <div className="flex justify-end mr-50 ">
        <img src="entreprise-fr.png" alt="entreprise-fr.png" className="h-20 w-20"  />
        <img src="fabrication-francaise.png" alt="logo_fabrication_francaise" className="h-20 w-35" />
        <img src="rge.png" alt="logo_rge" className="h-20 w-30"  />
      </div>
      <div className="bg-gray-400 w-80 h-100 ml-20 mt-10 rounded-lg">
        <p>blablablablabkla</p>
      </div>
    </>
  );
}
