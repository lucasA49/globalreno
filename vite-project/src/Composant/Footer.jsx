import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-6 md:py-8 px-4 md:px-8">
      <div className="container place-items-center grid w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-75">
          {/* Logo et infos */}
          <div className="flex flex-col items-start md:items-start space-y-4 text-center md:text-left">
            <div className="flex items-center">
              <div className="w-1 h-12 bg-green-500 mr-4"></div>
          <div className="flex flex-col items-start sm:block">
  <h2 className="text-blue-900 text-3xl font-bold">Global Reno</h2>
  <p className="text-blue-900 font-medium">
    Construire un avenir durable
  </p>
</div>

            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <a href="tel:+33784864539" className="hover:underline">
                07 84 86 45 39
              </a>
            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <a href="mailto:Infos.globalreno@gmail.com" className="hover:underline">
        Infos.globalreno@gmail.com
              </a>
            </div>
          </div>

          {/* Adresses */}
          <div className="pt-6 md:pt-2 text-center md:text-left">
            <h3 className="text-blue-800 font-semibold text-lg mb-3">
              Adresses
            </h3>
            <div className="mb-3">
              <p>
                20 Rue du Champ Blanc <br /> 49280 Mazières-en-Mauges
              </p>
            </div>
          </div>

          {/* Plus d'infos */}
          <div className="pt-6 md:pt-2 text-center md:text-left">
            <h3 className="text-blue-800 font-semibold text-lg mb-3">
              Plus d'infos sur Global Reno
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="/apropos" className="hover:underline">
                  À propos de Global Reno
                </a>
              </li>
              <li>
                <NavLink to="/Contact" className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0">
          <NavLink
            to="/ConditionsGénérales"
            className="hover:underline md:mr-2"
          >
            Conditions d'utilisation
          </NavLink>
          <span className="hidden md:inline"></span>
       
          <span className="hidden md:inline">-</span>
          <span className="md:ml-2">
            © 2025 - Global Reno -  Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
}
