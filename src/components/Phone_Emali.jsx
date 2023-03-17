import React from 'react'

export default function Phone_Email({type}) {
  return (
    <>
       {/* <!-- Start of email and phone number --> */}
       <div className="d-lg-flex justify-content-around cont-space-2 text-center ">
            <div className="phone mx-5 my-5 "><h3> {type==="user"?"Phone:" : "Business ID:"}<u>{window.sessionStorage.getItem('contact')}</u></h3></div>
            <div className="email mx-5 my-5 "> <h3>Email:<u>{window.sessionStorage.getItem('email')}</u></h3> </div>
        </div>
        {/* <!-- End of email and phone number --> */}    
    </>
  )
}
