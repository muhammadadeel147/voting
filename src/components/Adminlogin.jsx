import React, { useState } from 'react';
import "./Login.css"
import img1 from "../Assets/chats.svg"
import { NavLink, useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
  
    if (email.trim() !== '' && password.trim() !== '') { 
      navigate('/dashboard');
    } else {
      alert('Please fill in both email and password fields.');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
      </div>
      <div className="right-section">
        <div className="login-form">
          <h1 className="form-heading">Welcome to Trust 4 Vote</h1>
          <p className="form-heading">Enter your credentials to access your account</p>
          <form>
          <div className="form-group">
  <label htmlFor="email"  className='formlable'>Email address*</label>
  <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
</div>

            <div className="form-group">
            <label htmlFor="password" className='formlable'>Password*</label>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="password-toggle"
          onClick={togglePasswordVisibility}
        />
            </div>

            <button className="login-button" type="submit" onClick={handleLogin}>
              Login
            </button>
            <p>
          Do you want to Vote?{' '}
          <NavLink to="/user-login" className="signup cursor-pointer">
            Vote Now
          </NavLink>
        </p>
          </form>
        </div>
       
<div className="xyz">

        <img src={img1} alt=" Chat" id='messageicon' />
</div>
        
      </div>
    </div>
  );
}

export default Login;
