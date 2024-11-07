import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginCard.css';

const LoginCard = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [emailid, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailIdChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/hotelmanagement/login', {
        emailid,
        password,
      });

      navigate('/LandingPage'); 
      setPopupMessage('Login successful!');
      setShowPopup(true);
      console.log('Login successful');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setPopupMessage('Invalid email or password. Please try again.');
      } else {
        setPopupMessage('An error occurred during login. Please try again later.');
      }
      setShowPopup(true);
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-box">
      <h2>Login Page</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Enter EmailId"
            name="email"
            value={emailid}
            onChange={handleEmailIdChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit" className="submit" style={{marginLeft:'25%',width:'50%'}}>Submit</button>
      </form>
      <p style={{color:'royalblue',fontWeight:'500'}}>
        Want to register? <br></br><Link to="/RegistrationForm" style={{color:'royalblue',fontWeight:'500',fontSize:'13px',textDecoration:'underline'}}>Register here!</Link>
      </p>
      <p>
        <Link to="/ForgotPassword" style={{color:'royalblue',fontWeight:'100',fontSize:'13px',textDecoration:'underline'}}>Forgot Password?</Link>
      </p>
      {showPopup && <div className="popup">{popupMessage}</div>}
    </div>
  );
};

export default LoginCard;
