import React from 'react'
import Phone_Email from './Phone_Emali'
import Dash from './Dash'
import Profile from './Profile'
import './Dash.css'


function Dashboard() {
  return (
   <>
   
<div className="d-flex">
  <Profile/>
   <div className="d-flex flex-column">
  <Phone_Email/>
  <Dash/>    
    </div>  
  </div>   </>
  )
}

export default Dashboard
