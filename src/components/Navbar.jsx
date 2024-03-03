import React from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import "./Navbar.css";
import img from "../Assets/logo.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={img} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__right">
        <NavLink to="/user-login">
          <button className="nav-login-button">
            <FaUser className="user-icon" />
            User Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="nav-login-button">
          <FaUserShield className="user-icon" />
            Sign Up
          </button>
        </NavLink>
        <NavLink to="/admin-login">
          <button className="nav-login-button">
          <FaUserShield className="user-icon" />
            Admin Login
          </button>
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
