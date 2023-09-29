import React, { useState } from 'react';
//import InputField from '../InputField/InputField';

function Ajout() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de gestion de la soumission du formulaire d'inscription
    console.log('Données du formulaire soumises :', formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-slate-100 mt-10">
      <div className="max-w-lg  space-y-2 bg-white px-10 py-8 rounded-xl shadow">
      <h1 className="text-center text-2xl font-bold ">Enregistrer une formation</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-gray-700 text-lg font-bold mb-2">
            Titre de la formation:
          </label>
          <input type="text" id="firstname" name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="Titre de la formation"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-700 text-lg font-bold mb-2">
            Description:
          </label>
          <textarea className='h-20 w-full placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500'> 
          </textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">
            Niveau de la formation :
          </label>
          <input type="email" id="email" name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="Débutant, Intermediaire, Avancé, Expert"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Valider
          </button>
        </div>

      </form>
      </div>
    </div>
  );
}

export default Ajout;
