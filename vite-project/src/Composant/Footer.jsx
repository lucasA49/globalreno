// import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-6 md:py-8  px-4 md:px-8">
      <div className="container  place-items-center grid margin-fr w-full  mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-75">
          {/* Logo et infos */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="w-1 h-12 bg-green-500 mr-4"></div>
              <div>
                <h2 className="text-blue-900 text-3xl font-bold">Global Reno</h2>
                <p className="text-blue-900 font-medium">Construire un avenir durable</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <a href="tel:+33784864539" className="hover:underline">07 84 86 45 39 </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <a href="mailto:info@solvari.com" className="hover:underline">test@globalreno.com</a>
            </div>
       
          </div>
          
          {/* Adresses */}
          <div className="pt-2">
            <h3 className="text-blue-800 font-semibold text-lg mb-3">Adresses</h3>
            <div className="mb-3">
              <p>20 Rue du Champ Blanc <br /> 49280 Mazières-en-Mauges
              </p>
            </div>
          
          </div>
          
          {/* Plus d'infos */}
          <div className="pt-2 justify-self-end ">
            <h3 className="text-blue-800 font-semibold text-lg mb-3">Plus d'infos sur Global Reno</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">À propos de Global Reno</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-sm flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0">
          <a href="#" className="hover:underline md:mr-2">Conditions d'utilisation</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline md:mx-2">Politique de vie privée</a>
          <span className="hidden md:inline">|</span>
          <span className="md:ml-2">© 2025 - Global Reno - Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
}
