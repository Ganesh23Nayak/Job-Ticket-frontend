import { useState } from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup'

function App() {

  // return (
  //   <>
  //     <Navbar/>
  //     <Home/> 
  //   </>
  // )


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup/user' element={<Signup type="user" />} />
        <Route path='/signup/company' element={<Signup type="company" />} />
        <Route path='/dashboard/user' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
