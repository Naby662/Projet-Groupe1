import { Fragment, useState } from 'react'
//import './App.css'
// import Header from './components/Header/Header'
// import Container from './components/Container/Container'

// import RegisterForm from './components/Register/Register'
// import App1 from './components/Task/App1'

// import Footer from './components/Footer/Footer'
// import Ajout from './components/Ajout'
import {Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <>
      {/* <Header />
      <RegisterForm />
      < Ajout/>

      <App1 />
      <Footer /> */}

<BrowserRouter>
      <Routes>
          <Route path='/Login' element={<Login />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

