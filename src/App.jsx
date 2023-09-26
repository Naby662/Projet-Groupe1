import { Fragment, useState } from 'react'
//import './App.css'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Login from './components/Login/Login'
import RegisterForm from './components/Register/Register'
import App1 from './components/Task/App1'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Login />
    
      <App1 />
      <Footer />
    </>
  )
}

export default App

