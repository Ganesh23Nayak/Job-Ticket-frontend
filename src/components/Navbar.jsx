import React from "react";
import './Navbar.css'


function Navbar() {
    

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
              <ul class="navbar-nav ms-auto my-2 my-lg-0 text-white">
                  <li class="nav-item"><a class="nav-link text-white text-center nav-l  " href="#top">Home</a></li>
                  <li class="nav-item"><a class="nav-link text-white nav-l text-center " href="#about">About</a></li>
                  <li class="nav-item"><a class="nav-link text-white nav-l text-center" href="#contact">Contact</a></li>
                  <li class="nav-item"><a class="nav-link text-white" href="/"><button className="btn btn-outline-light " type="submit">Office Login</button></a></li>
                  <li class="nav-item"><a class="nav-link text-white" href="/"><button className="btn btn-outline-light " type="submit">Employee Login</button></a></li>
          
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
