import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Informations de contact */}
          <div>
            <h2 className="text-lg font-semibold">Contactez-nous</h2>
            <p className="mt-2">Conakry, République de Guinée</p>
            <p>Téléphone : +224 620 19 96 53</p>
            <p>Email : abddallahtab96@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Nos partenaires</h2>
            <p className="mt-2"></p>
            <p className='text-orange-500'>Orange Digital Center</p>
            <p>Adresse : Kipé/C.Ratoma</p>
            <p>Téléphone : +224 620 19 96 53</p>
          </div>

          {/* Liens rapides */}
          <div>
            <h2 className="text-lg font-semibold">Liens rapides</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="hover:text-blue-300">Accueil</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Inscription</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Connexion</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Déconnexion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
