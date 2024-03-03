import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './LoginSection.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../redux/mainSlice';
import { Toast } from 'primereact/toast';
import img1 from "../Assets/c.png"
const SignUpForm = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [cnic, setCnic] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [electionCenter, setElectionCenter] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = () => {
    dispatch(showLoader());


    const formData = new FormData();
    formData.append('id', id);
    formData.append('cnic', cnic);
    formData.append('name', name);
    formData.append('city', city);
    formData.append('district', district);
    formData.append('province', province);
    formData.append('electionCenter', electionCenter);
    formData.append('file', file);

    axios
      .post('http://localhost:5000/signup', formData)
      .then((response) => {
        if (response.data.success) {
          setTimeout(() => {
            navigate('/user-login', { state: response.data.data });
          }, 3000);
        }
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());

      });
  };

  return (
    <>
      <Navbar />
      <Toast ref={toast} position="top-center" />
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
     
  <div className="p-inputgroup">
    <div className="card flex justify-content-center">
      <div className="flex flex-column ">
        <span className="p-float-label mb-1">
          <InputText
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="id">ID</label>
        </span>
        <span className="p-float-label mb-1">
          <InputText
            id="cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="28378-73672273-2"
         
          />
          <label htmlFor="cnic">CNIC</label>
        </span>

        <span className="p-float-label mb-1">
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         
          />
          <label htmlFor="name">Name</label>
        </span>

        <span className="p-float-label mb-1">
          <InputText
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
           
          />
          <label htmlFor="city">City</label>
        </span>

        <span className="p-float-label mb-1">
          <InputText
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
           
          />
          <label htmlFor="district">District</label>
        </span>


        <span className="p-float-label mb-1">
          <InputText
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            
          />
          <label htmlFor="province">Province</label>
        </span>

        <span className="p-float-label mb-1">
          <InputText
            id="electionCenter"
            value={electionCenter}
            onChange={(e) => setElectionCenter(e.target.value)}
          
          />
          <label htmlFor="electionCenter">Election Center</label>
        </span>

        <div className="mb-1">
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  </div>

  <Button label="Sign Up" className="p-button-primary" onClick={handleSignUp} />
</div>

      </div>
      
    </>
  );
};

export default SignUpForm;
