import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
    const [IsCompany, setIsCompany] = useState(false);

  return (
    <>
    {/* <!-- Navbar start --> */}
    <nav className="navbar navbar-expand-lg nav-color fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#"><h2> JobTicket</h2></a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
          {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
              <ul className="navbar-nav ms-auto my-2 my-lg-0 text-white text-left">
                  <li className="nav-item"><a className="nav-link text-white text-left nav-l  " href="#top">Home</a></li>
                  <li className="nav-item"><a className="nav-link text-white nav-l text-left " href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link text-white nav-l text-left" href="#contact">Contact</a></li>
                  <li className="nav-item"><Link className="nav-link text-white" to={'/signup'}><button className="btn btn-outline-light ">Login/Sign Up</button></Link></li>          
              </ul>
          {/* </div> */}
          </div>
        </div>
      </nav>
{/* <!-- Navbar end --> */}
        
    </>
  );
}

export default Navbar;
