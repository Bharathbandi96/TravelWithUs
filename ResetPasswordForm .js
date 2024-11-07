// ResetPasswordForm.js
import React, { useState } from 'react';
import './ResetPasswordForm.css'; // Create a CSS file for styling if needed

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    // Add your logic for resetting the password
    console.log('Resetting password with new password:', newPassword);
  };

  return (
    <div id="reset-password-card">
      <h2 style={{color:'whitesmoke'}}>Reset Password</h2>
      <form onSubmit={handleResetPasswordSubmit}>
        <div className="user-box">
          <input
            type="password"
            placeholder=" Enter New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
         
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}y
            required
          />
        
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#009688', 
            color: '#fff', 
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            
          }}
          // Add inline hover effect
          onMouseOver={(e) => { e.target.style.backgroundColor = '#00796b'; }} // Change background color on hover
          onMouseOut={(e) => { e.target.style.backgroundColor = '#009688'; }} // Revert back to original color on mouse out
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
