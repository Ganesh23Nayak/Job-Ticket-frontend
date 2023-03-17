import { useState } from 'react';

import './App.css'
// import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Login/> 
     {/* <Home/> */}
    </>
  )
}

export default App
