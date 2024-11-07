import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add your logic for password reset here
    console.log('Reset Password clicked with email:', email);
  };

  return (
    <div id="forgot-password-card">
      <h2>Forgot Password</h2>
      <p style={{color:'black'}}>Enter your mail-Id to reset your password.</p>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
         <button type="submit">Send OTP</button><br>
         </br>
         <input
          type="otp"
          placeholder="Enter OTP sent to above mailId"
          value={email}
          onChange={handleEmailChange}
        />
        
        <button type="submit">Verify OTP</button>
      </form>
      <p style={{color:'royalblue',fontWeight:'500'}}>
        Want to register? <a href="/RegistrationForm"><i style={{color:'royalblue',fontSize:'14px',textDecoration:'underline'}}>Register here</i></a>
      </p>
    </div>
  );
};

export default ForgotPassword;
