import React, { useEffect, useState } from "react";
import ExpForm from "./ExpForm";
import Pending from './Pending'
import Verified from './Verified'
import Rejected from './Rejected'
import Absconded from './Absconded'
import { io } from "socket.io-client";
const socket = io(`${import.meta.env.VITE_SERVER_URL}`);


export default function Dash({ type }) {
  const [AllReviews, setAllReviews] = useState([]);
  const [ShowPending, setShowPending] = useState(true);
  const [ShowAccepted, setShowVerified] = useState(false);
  const [ShowRejected, setShowRejected] = useState(false);
  const [ShowAbsconeded, setShowAbsconeded] = useState(false);

  useEffect(() => {
    socket.connect();
    socket.emit("join", ({ name: window.sessionStorage.getItem('name'), uuid: window.sessionStorage.getItem('uuid') }))
    socket.on("greet", (data) => {
      console.log(data);
    })
    socket.emit("get_reviews", ({ uuid: window.sessionStorage.getItem('uuid'), type }))
    socket.on("data", (data) => {
      console.log(data.data);
      setAllReviews(data.data);
    })
  }, [])
  return (
    <>
      <div className="container-fluid  ">

        {/* <!-- Start of Experience and phone number/email part --> */}

        {/* <!-- start of experience part --> */}
        <div className="main_experience p-3 ">
          <div className="exp-heading d-flex justify-content-between">
            <div className="experience my-2 text-dark">
              <h2>EXPERIENCE</h2>
            </div>
            <div className="add_new my-2 mr-2">
              <ExpForm type = {type}></ExpForm>
            </div>
          </div>
          <div className="container exp-bg-set ">
            <div className="d-flex ">
              <div className="worked mx-3 mt-3">
                <h3>Worked</h3>
              </div>
              <div className="btns-done-pending d-flex justify-content-end flex-grow-1">
                <div>
                  <button className={`${ShowAccepted ? ('btn-success') : ('btn-light')} btn mx-3 mt-3  px-2 py-1`} onClick={() => {
                    setShowVerified(true);
                    setShowPending(false);
                    setShowRejected(false);
                    setShowAbsconeded(false)
                  }}>
                    Verified
                  </button>
                </div>
                <div>
                  <button className={`${ShowPending ? ('btn-warning') : ('btn-light')} btn  mx-3 mt-3 px-2 py-1`} onClick={() => {
                    setShowVerified(false);
                    setShowPending(true);
                    setShowRejected(false);
                    setShowAbsconeded(false)
                  }}>
                    Pending
                  </button>
                </div>
                <div>
                  <button className={`${ShowRejected ? ('btn-danger') : ('btn-light')} btn  mx-3 mt-3 px-2 py-1`} onClick={() => {
                    setShowVerified(false);
                    setShowPending(false);
                    setShowRejected(true);
                    setShowAbsconeded(false)
                  }}>
                    Rejected
                  </button>
                </div>
                <div>
                  <button className={`${ShowAbsconeded ? ('btn-dark') : ('btn-light')} btn mx-3 mt-3 px-2 py-1`} onClick={() => { 
                    setShowVerified(false);
                    setShowPending(false);
                    setShowRejected(false);
                    setShowAbsconeded(true)
                   }}>
                    Absconded
                  </button>
                </div>
              </div>
            </div>
            {ShowPending && <Pending data={AllReviews} type={type} />}
            {ShowAccepted && <Verified data={AllReviews} />}
            {ShowRejected && <Rejected data={AllReviews} />}
            {ShowAbsconeded && <Absconded data={AllReviews} />}

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
