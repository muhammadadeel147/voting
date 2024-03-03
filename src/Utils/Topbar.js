import React from 'react'
import "./Utils.css"

import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import img from "../Assets/logo.png"
function Topbar() {
  return (
    <div className='topnavbar'>
        <div className='search'>
        <img src={img} alt="Logo" className="navbar__logo" />
   
       <div className='nav-right'>
       <div className='top-icon'>
       <FaBell size={15}/>
      </div>
      <div className='top-icon-Icon'>
      <FaSearch size={15}/>
      </div>
      
       <div className='nameicon'>
       <p>Devon Lane</p>
       </div>
       <div className='person'>
       <FaUserCircle size={35} />
       <item className="dropdown4"><i class="fas fa-chevron-circle-down"></i></item>
       </div>
       </div>
       </div>
    </div>
    
  )
}

export default Topbar
