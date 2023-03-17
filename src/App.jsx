// import { useState } from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/Home';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      {/* <Login/>  */}
      <Home/>
     {/* <Signup/> */}
    </>
  )
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Home />}>Home</Route>
  //       <Route path='/' element={<Home />}>Home</Route>
  //       <Route path='/' element={<Home />}>Home</Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App
