import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './LoginSection.css';
import img from "../Assets/p.png"
import img1 from "../Assets/c.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../redux/mainSlice';

import { Toast } from 'primereact/toast';
const LoginSection = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const [cnic, setCnic] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(showLoader());
      axios.post('http://localhost:5000/login', { cnic })
          .then(response => {
              if(response.data.success) {
                toast.current.show({severity:'success', detail:'User Found ', life: 3000});
                setTimeout(() => {
                  navigate('/facematch', { state: response.data.data });
                }, 3000); 
              } 
              else {
                toast.current.show({severity:'warn', detail:'User Not Found ', life: 3000});
              }  
              
           
              dispatch(hideLoader());
          })
          .catch(error => {
            dispatch(hideLoader());
            toast.current.show({severity:'error', detail:error, life: 3000});
         
          });
          
          
  };
  
  return (
    <><Navbar/>
 
    <Toast ref={toast} position="top-center"/>
    <div className="user-login-section">
      <div className="user-left-section">
        <h2 style={{fontSize:"50px",fontWeight:"700",color:"#6365CC"}}>Harnessing the Power <br />of Democracy.</h2>
        <div className="content-container">
          <div className="rounded-image">
            <img src={img1} alt="Rounded Shape" />
          </div>
          <div className="admin-paragraph">
            <p>
              As a user, your participation is vital to the democratic process. Behind the scenes, our dedicated team of administrators works tirelessly to ensure the security and integrity of our platform. Through their secure management, they guarantee that your voting experience is smooth, transparent, and fair. The Admin Login serves as the safeguard, enabling our platform to function seamlessly and ensuring that your voice is heard and counted accurately.
            </p>
          </div>
        </div>
      </div>
      <div className="user-right-section">
        <div className="profile-picture">
          <img src={img} alt="Profile" />
        </div>

      
         <div className="login-fields">
          <div className="p-inputgroup">
         
        
<div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="cnic">CNIC</label>
                <InputText placeholder="28378-73672273-2" id="cnic" value={cnic} onChange={(e) => setCnic(e.target.value)} 
                 style={{ padding: '10px', borderRadius: '20px',width:"230px" }} className="p-inputtext-lg"/>
                
            </div>
        </div>

        
           
          </div>
          <Button label="Login" className="p-button-primary" onClick={handleLogin} />
         
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginSection;