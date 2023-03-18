import React from "react";
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ props }) {
  return (
    <>
      {/* <!-- Navbar start --> */}
      <nav className="navbar navbar-expand-lg nav-color fixed-top">
        <div className="container-fluid">
          {/* <a className="navbar-brand text-light" href="#"><h2> JobTicket</h2></a> */}
          {<NavLink to={"/"}> <div className="nav-head">JobTicket</div></NavLink>}
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
            <ul className="navbar-nav ms-auto my-2 my-lg-0 text-white">
              <li className="nav-item"><a className="nav-link text-white text-right nav-l  " href="#top">Home</a></li>
              <li className="nav-item"><a className="nav-link text-white nav-l text-right " href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link text-white nav-l text-right" href="#contact">Contact</a></li>
              {!window.sessionStorage.getItem('contact') ? (
                <>
                  <li className="nav-item">
                    <Link to="/signup/company">
                      <button className="btn btn-outline-secondary text-white mx-1 text-right my-2">Office Login/Sign Up</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup/user">
                      <button className="btn btn-outline-secondary text-white mx-1 text-right my-2">Employee Login/Sign Up</button>
                    </Link>
                  </li>
                </>
              ) : (<li className="nav-item">
                <button onClick={()=>{sessionStorage.clear(); window.location.replace('/')}} className="btn btn-outline-secondary text-white mx-1 text-right my-2">Logout</button>
              </li>)}

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
