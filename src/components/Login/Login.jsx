import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useSignupMutation, useLoginMutation } from '../../api/Auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Ajoutez ici la logique de gestion de la soumission du formulaire
  //   console.log('Données du formulaire soumises :', formData);
  // };
  const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'il faut au m oins 3 caracteres').required(),
});


 export default function LoginForm() {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const [login, {data, isLoading, isSuccess, isError, error}] = useLoginMutation();
    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('user', JSON.stringify(data))
                navigate('/gestache');
        }
    }, [isSuccess]);

    const onSubmit = (data) => {
        login(data);
    };

  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-slate-100">
        <div className="max-w-lg space-y-2 bg-white px-10 py-8 rounded-xl shadow">
            <h1 className="text-center text-3xl font-bold">Se connecter</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <label htmlForf="email" className='font-bold text-lg ' >E-mail
                    <input 
                     {...register("email")}
                    type="email" 
                    name='email' 
                    id='email' 
                   
                    className='border border-gray-400 rounded mb-4 p-2 w-full outline-orange-500 required'
                    placeholder="barry.doe@example.com" 
                     />
                     {
                errors.email && <p className="text-red-500">{errors.email.message}</p>
            }
                </label>
                <label htmlForf="password" className='font-bold text-lg ' >Password
                    <input 
                    {...register("password")}
                    type="password" name='password' id='password'
                     className='border border-gray-400 rounded p-2 w-full outline-orange-500 required'
                     placeholder="********"
                   />
                   {
                errors.password && <p className="text-red-500">{errors.password.message}</p>
            }
                </label>
                <button  type='submit' 
             className={`bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ''}`}
             >
               {isLoading ? 'Chargement...' : 'Se connecter'}
                </button>
                <Link to='/register'  type='submit' className='bg-orange-500 text-white font-bold py-2 mt-4  ml-40 px-4 rounded'>S'inscrire</Link>
            </form>
        </div>
     </div>
  );
}


