import React from 'react'
import "./Utils.css"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="Sidebar">
 
      <ul className='hello'>
        <li>
          <Link className='hello' to="/">
            <i className="fas fa-th"></i> Home
          </Link>
        </li>
        <li>
          <Link className='hello' to="/prev">
            <i className="fa-solid fa-users"></i> Previous Elections
          </Link>
        </li>
        <li>
          <Link className='hello' to="/Candidate">
            <i className="fas fa-user-tie"></i> Candidate 
            <item className="dropdowns"><i class="fas fa-chevron-circle-down"></i> </item> 
          </Link>
        </li>
        <li>
          <Link className='hello' to="/term">
            <i className="far fa-calendar-check"></i> Terms and Condition
          </Link>
        </li>
       
        
      </ul>
      <ul className='help'>
          
          <i class="far fa-question-circle"></i> Help
          
        </ul>

    </div>
  )
}

export default Sidebar

