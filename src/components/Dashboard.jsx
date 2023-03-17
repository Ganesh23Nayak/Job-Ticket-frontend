import React from 'react'
import Phone_Email from './Phone_Emali'
import Dash from './Dash'
import Profile from './Profile'
import './Dash.css'


function Dashboard({type}) {
  return (
  <>
    <div className="d-lg-flex">
      <Profile/>
      <div className="d-lg-flex flex-column">
        <Phone_Email type={type}/>
        <Dash type={type}/>
      </div>
    </div>
  </>
  )
}

export default Dashboard
