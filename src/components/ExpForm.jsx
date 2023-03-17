import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

function ExpForm() {
  const [StartDate, SetStartDate] = useState("");
  const [EndDate, SetEndDate] = useState("");
  const [Desc, SetDesc] = useState("");
  const [CompanyName, SetCompanyName] = useState("");
  const [AllCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/getAllCompanies`, {}, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    })
      .then(data => SetAllCompanies(data.data.data))
      .catch(err => console.log(err))
  })

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
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
                <label for="exampleFormControlTextarea1" className="form-label">
                  Enter the company Name
                </label>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={AllCompanies}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Enter the company Name" />}
                  onChange={(e) => { SetCompanyName(e.target.value) }}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Enter Job Details
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows=""
                  onChange={(e) => { SetDesc(e.target.value) }}
                ></textarea>
              </div>

              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">
                        Add Work Experience
                      </label>
                      <div className="input-group date">
                        <input type="date" className="form-control" onChange={(e) => { SetStartDate(e.target.value) }} />
                        <div className="input-group-addon">
                          <span className="glyphicon glyphicon-th"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">
                        To
                      </label>
                      <div className="input-group date">
                        <input type="date" className="form-control" onChange={(e) => { SetEndDate(e.target.value) }} />
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpForm;
