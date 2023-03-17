import React from 'react'

export default function Phone_Email({type}) {
  return (
    <>
       {/* <!-- Start of email and phone number --> */}
       <div className="d-lg-flex justify-content-around cont-space-2 text-center mt-5 text-dark">
            <div className="phone mx-5 my-5 "><h3> {type==="user"?"Phone:" : "Business ID:"}<u>467497646</u></h3></div>
            <div className="email mx-5 my-5 "> <h3>Email:<u>123@gmail.com</u></h3> </div>
        </div>
        {/* <!-- End of email and phone number --> */}    
    </>
  )
}
