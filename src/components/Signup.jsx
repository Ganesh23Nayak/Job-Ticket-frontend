import React from 'react'
import './Signup.css'

function Signup({type}) {
  return (
<>
<div className='body'>
<div className="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Register</h2>
		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">

	<input type="text" className="form-control" name="Name" placeholder=" Name" required="required"/>
			
	       	
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
        	<input type="number" className="form-control" name="number" placeholder={type === "user" ? "Phone Number" : "Business ID"} required="required"/>
        </div> 
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>  
        <div className="form-group">
     
          <p>Choose Profile Picture</p>
          <input
            className="form-control form-control-sm"
            id="formFileSm"
            type="file" placeholder="Upload profile picture"/>
        </div>
             
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
    
		<div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <a href="#">Log In</a></div>
</div>
</div>
</>
  )
}

export default Signup
