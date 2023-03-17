import React from 'react'
import "./Dash.css";
export default function Pending() {
  return (
   <>
      {/* <!-- Start of individual experience box --> */}
      <div className="card  text-center pending-bg-set my-3">
            {/* <div className="mt-4 mb-4"><img className="mt-3" src="img/download (3).jpeg" alt=""/></div> */}
            <div className="d-lg-flex flex-column  mt-5 text-dark my-3 ">
              <h3>Company Name</h3>
              <h5>Worked as FrontEnd Developer</h5>
              <p>2014-2018</p>
              <div className='d-lg-flex justify-content-center text-center'>           
               <button className='btn btn-success my-2 mx-2 text-dark'>
               Accept
              </button>
              <button className='btn btn-danger my-2 mx-2'>
               Reject
              </button>
              <button className='btn btn-danger mb-2  mx-2 my-2'>
                Absconded
              </button>
              </div>
            </div>
            </div>
          {/* <!-- End of individual experience box --> */}
   </>
  )
}