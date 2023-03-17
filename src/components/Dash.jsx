import React from "react";
import ExpForm from "./ExpForm";

import Pending from './Pending'
import Verified from './Verified'
export default function Dash({type}) {
  return (
    <>
      <div className="container-fluid  ">
      
          {/* <!-- Start of Experience and phone number/email part --> */}

          {/* <!-- start of experience part --> */}
          <div className="main_experience p-3 ">
            <div className="exp-heading d-flex justify-content-between">
              <div className="experience my-2">
                <h2>EXPERIENCE</h2>
              </div>
              <div className="add_new my-2 mr-2">
                <ExpForm/>
                {/* <button className="btn btn-primary">Add New</button> */}
              </div>
            </div>
            <div className="container exp-bg-set ">
              <div className="d-flex ">
                <div className="worked mx-3 mt-3">
                  <h3>Worked</h3>
                </div>
                <div className="btns-done-pending d-flex justify-content-end flex-grow-1">
                  <div>
                    <button className="mx-3 mt-3 done-btn-col px-2 py-1">
                      Verified
                    </button>
                  </div>
                  <div>
                    <button className="mx-3 mt-3 pending-btn-col px-2 py-1">
                      Pending
                    </button>
                  </div>
                </div>
              </div>
        <Pending/>
   <Verified/>

              {/* <!-- End of individual experience  pending box --> */}
            </div>
          </div>
          {/* <!-- end of experience part --> */}
        </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
