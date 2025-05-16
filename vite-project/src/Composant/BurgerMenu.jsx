import React, { useState, useEffect } from 'react';
import "../Styles/App"; // Vérifie que ce fichier contient bien la classe .noscroll

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById('root');

    if (isOpen) {
      html.classList.add('noscroll');
      body.classList.add('noscroll');
      root?.classList.add('noscroll');
    } else {
      html.classList.remove('noscroll');
      body.classList.remove('noscroll');
      root?.classList.remove('noscroll');
    }

    return () => {
      html.classList.remove('noscroll');
      body.classList.remove('noscroll');
      root?.classList.remove('noscroll');
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute z-[100]">
      <button 
        className="lg:hidden p-4 text-white" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-[10000] pointer-events-auto"
          onClick={toggleMenu}
        >
          <nav 
            className="flex flex-col items-center justify-center w-full h-full bg-white z-[10001]"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si clic à l'intérieur
          >
            <a href="/" className="text-xl py-2 text-black">Accueil</a>
            <a href="/toiture" className="text-xl py-2 text-black">Toiture</a>
            <a href="/facade" className="text-xl py-2 text-black">Façade</a>
            <a href="/isolation" className="text-xl py-2 text-black">Isolation</a>
            <a href="/contact" className="text-xl py-2 text-black">Contact</a>
            <button
              className="mt-4 text-blue-500 underline"
              onClick={toggleMenu}
            >
              ← Retour
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
