import { useState } from 'react';

import './App.css'
// import Home from './components/Home';
// import Login from './components/Login';
import Navbar from './components/Navbar';
// import Pending from './components/Pending';
// import Nav1 from './components/Nav1';
// import Dash from './components/Dash';
// import Profile from './components/Profile';
import Home from './components/Home';
// import Signup from './components/Signup';
// import Pending from './components/Pending';
// import Verified from './components/Verfied';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      {/* <Login/>  */}
     {/* <Home/> */}
{/* <Nav1/>   checked */}
{/* <Dash/> checked */}

{/* <Pending/> 
// <Verified/>  checked */}
{/* <Login/> */}
{/* <Profile/>*/} *
<Home/> 

    </>
  )
}

export default App
