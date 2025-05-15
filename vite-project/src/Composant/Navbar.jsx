import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { to: "/", label: "Accueil" },
    { to: "/toiture", label: "Toiture" },
    { to: "/facade", label: "Façade" },
    { to: "/isolation", label: "Isolation" },
    { to: "/Contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Fonction pour fermer le menu

  return (
    <nav className="w-full flex justify-between items-center bg-gray-300 gap-30 h-15 p-9">
      {/* Logo */}
      <NavLink to="/">
        <img className="w-23" src="logo-header.png" alt="logo_global_reno" />
      </NavLink>

      {/* Menu Burger Button (visible uniquement sur mobile) */}
      <button
        className="lg:hidden p-4 text-black"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Menu Desktop (visible sur les grands écrans uniquement) */}
      <div className="hidden lg:flex">
        {menu.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${
                isActive ? "bg-[#9ac575]" : "hover:bg-gray-300"
              } text-black font-medium rounded-full px-6 py-3 w-32 text-center`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Menu Mobile (visible uniquement sur mobile) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-80 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={toggleMenu}
      >
        <nav
          className="flex flex-col items-start justify-start w-full h-full px-6 py-4"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture du menu quand tu cliques sur un lien
        >
          {/* Bouton Retour */}
          <button
            onClick={closeMenu} // Ferme le menu
            className="text-white font-medium text-xl mb-6"
          >
            &#8592; Retour
          </button>

          {/* Liens du menu */}
          {menu.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="text-xl py-2 text-white"
              onClick={closeMenu} // Ferme le menu après le clic
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
}
