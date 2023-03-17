import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './Signup.css'

function Signup({ type }) {
  const setData = (data) => {
    for (var key in data) {
      window.sessionStorage.setItem(key, data[key]);
    }
  }
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [ShowLoading, setShowLoading] = useState(false);

  const signUp = () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/signUp`,
      {
        name,
        contact,
        email,
        password,
        type
      },
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },)
      .then(data => {
        setShowLoading(true)
        setData(data.data.data);
        window.location.replace('/dashboard/' + type) //Change dashboard to user or company as needed
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className='body'>
        <div className="signup-form">
          <form onSubmit={(e) => { e.preventDefault(); signUp(); }}>
            <h2>Register</h2>
            <p className="hint-text">Create your account. It's free and only takes a minute.</p>
            <div className="form-group">

              <input type="text" className="form-control" name="Name" placeholder=" Name" required="required" onChange={(e) => { setname(e.target.value) }} />


            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" required="required" onChange={(e) => { setemail(e.target.value) }} />
            </div>
            <div className="form-group">
              <input type={type === "user"? "tel":"text"} className="form-control" name="number" placeholder={type === "user" ? "Phone Number" : "Business ID"} required="required" onChange={(e) => { setcontact(e.target.value) }} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={(e) => { setpassword(e.target.value) }} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" onChange={(e) => { setRepeatPassword(e.target.value) }} />
            </div>
            <div className="form-group">

              <p>Choose Profile Picture</p>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file" placeholder="Upload profile picture" />
            </div>

            <div className="form-group">
              <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
            </div>

            <div className="form-group">
              <button type='submit' className="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
          </form>
          <div className="text-center">Already have an account? <a href="/login">Log In</a></div>
        </div>
      </div>
    </>
  )
}

export default Signup
