import React from 'react'

export default function Nav1() {
  return (
    <>
    {/* <!-- Navbar start --> */}
    <nav className="navbar navbar-expand-lg  nav-color">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#"><h2> JobTicket</h2></a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form className="d-flex ms-auto" role="search">
              {/* <!-- <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> --> */}
              <button className="btn btn-outline-light " type="submit">Logout</button>
            </form>
          </div>
        </div>
      </nav>
{/* <!-- Navbar end --> */}
    </>
  )
}
