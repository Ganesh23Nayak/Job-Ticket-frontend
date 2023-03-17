import React from 'react'
import "./Dash.css";
export default function Verified({ data }) {
  const verifiedReviews = data.filter((review) => { return review.Review_status === "Accept" })
  console.log(verifiedReviews);
  return (
    <>
      {/* <!-- Start of individual experience box --> */}
      {verifiedReviews.map((review, key) => {
        return (
          <div key={key} className="card  text-center green-bg-set my-3">
            {/* <div className="mt-4 mb-4"><img className="mt-3" src="img/download (3).jpeg" alt=""/></div> */}
            <div className="d-lg-flex flex-column  mt-5 text-dark my-3 ">
              <h3>{review.Company_Name}</h3>
              <h5>{JSON.parse(review.description).Desc}</h5>
              <p>{JSON.parse(review.description).StartDate} - {JSON.parse(review.description).EndDate}</p>
            </div>
          </div>
        )
      })}
      {/* <!-- End of individual experience box --> */}
    </>
  )
}