import React, { useState } from 'react';
import Email from 'https://smtpjs.com/v3/smtp.js'; // Import the Email module from SMTPJS

const EmailOTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateOTP = () => {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000);
  };

  const sendOTP = (email, otp) => {
    // Use SMTPJS to send the OTP via email
    Email.send({
      SecureToken: "d9aeae2f-8d48-4db0-b7ea-1fd097ddeaef", // Replace with your SecureToken
      To: "sundeep741@gmail.com",
      From: "sundeep741@gmail.com",
      Subject: "Your One-Time Password (OTP)",
      Body: `Your OTP is: ${otp}`
    }).then(
      message => console.log(message)
    );
  };

  const verifyOTP = () => {
    // Get the entered OTP from the user
    const enteredOTP = document.getElementById("otpInput").value;

    // Replace this with the OTP sent to the user's email
    const sentOTP = sessionStorage.getItem("otp");

    if (enteredOTP === sentOTP) {
      alert("OTP verification successful!");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const requestOTP = () => {
    // Generate and send OTP when the user requests it
    const email = document.getElementById("emailInput").value;
    const otp = generateOTP();

    // Save the OTP in session storage for later verification
    sessionStorage.setItem("otp", otp);

    // Send the OTP via email
    sendOTP(email, otp);

    setIsGenerated(true);
  };

  return (
    <div>
      <h2>Email OTP Verification</h2>

      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" required />
      <br />
      <button onClick={requestOTP}>Request OTP</button>

      <br /><br />

      {isGenerated && (
        <>
          <label htmlFor="otpInput">Enter OTP:</label>
          <input type="text" id="otpInput" required />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default EmailOTPVerification;
