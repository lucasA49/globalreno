import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="lg:hidden p-4 text-white" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <div 
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu}
      >
        <nav 
          className="flex flex-col items-center justify-center w-full h-full bg-white"
          onClick={(e) => e.stopPropagation()}  // Empêche la fermeture quand on clique sur les liens
        >
          <a href="/" className="text-xl py-2 text-black">Home</a>
          <a href="/about" className="text-xl py-2 text-black">About</a>
          <a href="/services" className="text-xl py-2 text-black">Services</a>
          <a href="/contact" className="text-xl py-2 text-black">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
