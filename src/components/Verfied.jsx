import React from 'react'
import "./Dash.css";
export default function Verified() {
  return (
   <>
      {/* <!-- Start of individual experience box --> */}
      <div className="container d-lg-flex justify-content-around green-bg-set text-center ">
            {/* <div className="mt-4 mb-4"><img className="mt-3" src="img/download (3).jpeg" alt=""/></div> */}
            <div className="d-lg-flex flex-column  mt-5  ">
              <h3>Company Name</h3>
              <h5>Worked as FrontEnd Developer</h5>
              <p>2014-2018</p>
              <button className='btn btn-success my-2 mx-2'>
               Accept
              </button>
              <button className='btn btn-danger my-2 mx-2'>
               Reject
              </button>
              <button className='btn btn-danger mb-2  mx-2'>
                Absconded
              </button>
            </div>
            </div>
          {/* <!-- End of individual experience box --> */}
   </>
  )
}