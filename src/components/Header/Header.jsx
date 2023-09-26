
import React from 'react';

const Header = () => {
  return (
    <header className=" bg-orange-50 py-4">
      <div className="container mx-auto flex justify-between items-center">
      <div>
        <img
          src="/src/assets/images/logo.png"
          alt=""
          className=" w-50 h-50 object-contain mx-auto "
        />
        </div>
        {/* Logo */}
        <div className="flex-2  text-xl font-bold">
          <h1> APPLICATION DE GESTION DE TACHES</h1>
        </div>
        {/* Menu de navigation */}
        <nav>
          <ul className="flex space-x-4 text-md font-bold">
            <li>
              <a href="#" className="hover:text-blue-400">Accueil</a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">Inscription</a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">Connexion</a>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400">Déconnexion</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
