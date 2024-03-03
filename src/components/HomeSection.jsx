
import React from 'react';
import { Button } from 'primereact/button';
import img from "../Assets/a.png"
import { TiTick } from 'react-icons/ti'; 
import "./HomeSection.css";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import PageLoader from '../core/FullPageLoader';
const HomeSection = () => {
  return (
    <>
    <PageLoader/>
    <Navbar/>
    <div className="home-section">
      <div className="home-left-section">
        <h1 style={{fontWeight:"700",fontSize:"46px"}}>Welcome to Secure <span style={{color:"#6365CC"}}>E-Voting</span></h1>
        <p>
          Secure E-Voting is your trusted platform for secure, convenient, and transparent digital voting.
          Our cutting-edge technology ensures that your vote is counted accurately and your voice is heard.
          With our user-friendly interface and robust security measures, you can participate in the democratic process from the comfort of your own home.
        </p>
        <h3 className="heading">Why Choose Secure E-Voting?</h3>
        <ul className="reasons-list">
          <li>
            <TiTick className="tick-icon" />
            Trust and Transparency
          </li>
          <li>
            <TiTick className="tick-icon" />
            Convenience & Accessibility
          </li>
          <li>
            <TiTick className="tick-icon" />
            Security Measures
          </li>
          <li>
            <TiTick className="tick-icon" />
            User-Friendly Interface
          </li>
          <li>
            <TiTick className="tick-icon" />
            Real-Time Results
          </li>
        </ul>
        <NavLink to="/user-login"> 
        <Button label="Get Started" className="home-button-primary" />
    
        </NavLink> 
       
      </div>
      <div className="home-right-section " >
        <img src={img} alt="Right Section Image" style={{ height: "350px" }} />
      </div>
    </div>
    </>
  );
};

export default HomeSection;