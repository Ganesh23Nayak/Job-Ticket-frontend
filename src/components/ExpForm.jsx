import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";
import { io } from "socket.io-client";

const socket = io(`${import.meta.env.VITE_SERVER_URL}`);

function ExpForm() {
  const [StartDate, SetStartDate] = useState("");
  const [EndDate, SetEndDate] = useState("");
  const [Desc, SetDesc] = useState("");
  const EmployeeUUID = window.sessionStorage.getItem('uuid');
  const [CompanyUUID, SetCompanyUUID] = useState("");
  const [AllCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/api/getAllCompanies`, {}, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    })
      .then(data => {
        // console.log(data.data.data[0])
        const result = data.data.data.map((element, index) => {
          return (<option key={index} className={``}  value={element.FullName} id={element.uuid} >{element.FullName}</option>)
        })
        setAllCompanies(result)
      })
      .catch(err => console.log(err))

    socket.connect();
    socket.emit("join", ({ name: window.sessionStorage.getItem('name'), uuid:  window.sessionStorage.getItem('uuid')}))
    socket.on("greet", (data) => {
      console.log(data);
    })
    socket.emit("get-reviews", ({ uuid: window.sessionStorage.getItem('uuid') }))
    socket.on("data", (data) => {
      console.log(data.data);
    })
  }, [])

  const submit = (e) => {
    e.preventDefault()    
    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/addReview`, { EmployeeUUID, CompanyUUID: e.target[1].selectedOptions[0].id, details: { StartDate, EndDate, Desc } },
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      })
      .then(res => { console.log(res.data.message); })
      .catch(error => console.error(error))
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add new Experience
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content text-dark">
            <form onSubmit={(e) => submit(e)}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Experience
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Company Name
                  </label>
                  {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo" required
                    options={AllCompanies}
                    sx={{ width: 300 }}
                    renderInput={(params) => {console.log({...params.id}); return<TextField {...params} label="Enter the company Name" />}}
                    onChange={(e) => { SetCompanyUUID(e.target.value) }}
                  /> */}
                  <select name="companies" id="companies">
                    {AllCompanies}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Job Details
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="" required
                    onChange={(e) => { SetDesc(e.target.value) }}
                  ></textarea>
                </div>

                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                          From
                        </label>
                        <div className="input-group date">
                          <input type="date" className="form-control" required onChange={(e) => { SetStartDate(e.target.value) }} />
                          <div className="input-group-addon">
                            <span className="glyphicon glyphicon-th"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                          To
                        </label>
                        <div className="input-group date">
                          <input type="date" required className="form-control" onChange={(e) => { SetEndDate(e.target.value) }} />
                          <div className="input-group-addon">
                            <span className="glyphicon glyphicon-th"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <input type="submit" className="btn btn-primary" value="Save Changes" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpForm;
