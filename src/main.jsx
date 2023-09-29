import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import LoginForm from './components/Login/Login';
import RegisterForm from './components/Register';
import Ajout from './Ajout';
import Gestache from './components/Task/Gestache';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "/ajout",
    element: <Ajout/>
  },
  {
    path: "/Gestache",
    element: <Gestache/>
  },
  // {
  //   path: "/Todo",
  //   element: <Todo/>
  // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
