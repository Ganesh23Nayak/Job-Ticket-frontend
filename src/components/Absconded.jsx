import axios from 'axios';
import React from 'react'
import "./Dash.css";
export default function Absconded({ data, type }) {
  const pendingReviews = data.filter((review) => { return review.Review_status === "Absconded" })

  const submitStatus = (e)=>{
    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/submitStatus`, {id:e.target.dataset.key, newStatus: e.target.value})
    .then(res=>console.log(res.data.message))
    .catch(err=>console.log(err))
  }
  console.log(pendingReviews);
  return (
    <>
      {/* <!-- Start of individual experience box --> */}
      {pendingReviews.map((review, key) => {
        return (
          <div key={key} className="card  text-center pending-bg-set my-3 bg-warning">
            {/* <div className="mt-4 mb-4"><img className="mt-3" src="img/download (3).jpeg" alt=""/></div> */}
            <div className="d-lg-flex flex-column  mt-5 text-dark my-3 ">
              <h3>{review.Company_Name}</h3>
              <h5>{JSON.parse(review.description).Desc}</h5>
              <p>{JSON.parse(review.description).StartDate} - {JSON.parse(review.description).EndDate}</p>
              {(type === "company" ? (
                <div className='d-lg-flex justify-content-center text-center'>
                <button onClick={(e)=>{submitStatus(e)}} data-key={review.id} value={"Accept"} className='btn btn-success my-2 mx-2 text-dark'>
                  Accept
                </button>
                <button onClick={(e)=>{submitStatus(e)}} data-key={review.id} value={"Reject"} className='btn btn-danger my-2 mx-2'>
                  Reject
                </button>
                <button onClick={(e)=>{submitStatus(e)}} data-key={review.id} value={"Absconded"} className='btn btn-danger mb-2  mx-2 my-2'>
                  Absconded
                </button>
              </div>
              ): (null))}
            </div>
          </div>
        )}
      )}
      {/* <!-- End of individual experience box --> */}
    </>
  )
}