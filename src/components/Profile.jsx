import React from 'react'
import './Dash.css'
export default function Profile() {
  return (
  <>
   {/* <!-- profile pic with number start  --> */}
        
   <div className="d-flex flex-column justify-content-center cont-space bg-set text-center  w-100 ">
     
     <div><img  className="emp-picture mx-auto mt-3 w-50 " src="img/men.jpeg" alt=""/></div>
       <div className="name text-light"><h2>{window.sessionStorage.getItem('name')}</h2></div>
       <div className="mx-5 my-1 text-light"><h4>{window.sessionStorage.getItem('uuid')}</h4></div>
       <div><button className="btn btn-primary mt-5 px-3 mb-2">EDIT</button></div>
   </div>
           {/* <!-- profile pic with number end  --> */}

  </>
  )
}
