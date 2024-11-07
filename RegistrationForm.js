// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    mobileno: '',
    gender: '',
    address: '',
    username: '',
    password: '',
    confirmpassword: '',
    aadharno: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name should contain only characters and spaces';
    }

    if (!formData.emailid || !formData.emailid.trim()) {
      newErrors.emailid = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|in)$/i.test(formData.emailid)) {
      newErrors.emailid = 'Invalid email address. It should end with .com or .in';
    }

    if (!formData.mobileno || !formData.mobileno.trim()) {
      newErrors.mobileno = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileno)) {
      newErrors.mobileno = 'Invalid mobile number';
    }

    if (!formData.gender || !formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.address || !formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.username || !formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password || !formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }
    if (!formData.aadharno || !formData.aadharno.trim()) {
      newErrors.aadharno = 'Aadhar Number is required';
    } else if (!/^\d{12}$/.test(formData.aadharno)) {
      newErrors.aadharno = 'Invalid Aadhar number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/hotelmanagement/save', formData);
        if (response.data.success) {
          alert('Registration Unsuccessful! Your account has not been created.');


        } else {
          alert('Registration successful! Your account has been created.');
          window.location.href = '/LoginCard';
        }
      } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data);
        }
        alert('Registration failed. Please try again later.');
      }
    }
  };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//         try {
//             const response = await axios.post('http://localhost:8080/hotelmanagement/save', formData);
//             if (response.status === 201) {
//                 const customerId = response.data;
//                 alert('Registration successful! Your account has been created. Your customer ID is: ' + customerId);
//                 // Do something with the customer ID, e.g., store it in state or pass it to another component
//             } else {
//                 alert('Registration Unsuccessful! Your account has not been created.');
//             }
//         } catch (error) {
//             console.error('Error during registration:', error);
//             if (error.response) {
//                 console.error('Server responded with:', error.response.data);
//             }
//             alert('Registration failed. Please try again later.');
//         }
//     }
// };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register </p>
      <p className="message">Signup now and get full access to our app. </p>

      <label>
        <input
          required
          placeholder=""
          type="text"
          className="input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>FullName</span>
        {errors.name && <p className="error">{errors.name}</p>}
      </label>

      <label>
        <input
          required
          placeholder=""
          type="email"
          className="input"
          name="emailid"
          value={formData.emailid}
          onChange={handleChange}
        />
        <span>EmailId</span>
        {errors.emailid && <p className="error">{errors.emailid}</p>}
      </label>

      <label>
        <input
          required
          placeholder=""
          type="number"
          className="input"
          name="mobileno"
          value={formData.mobileno}
          onChange={handleChange}
        />
        <span>Mobile Number</span>
        {errors.mobileno && <p className="error">{errors.mobileno}</p>}
      </label>

      <label>
  <span>Gender</span>
  <div>
    <label>
      <input
       required
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleChange}
      />
      Male 
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleChange}
      />
      Female 
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="other"
        checked={formData.gender === "other"}
        onChange={handleChange}
      />
      Other
    </label>
  </div>
  {errors.gender && <p className="error">{errors.gender}</p>}
  </label>


      <label>
        <input
          required
          placeholder=""
          type="text"
          className="input"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <span>Address</span>
        {errors.address && <p className="error">{errors.address}</p>}
      </label>

      {/* <label>
        <input
          required
          placeholder=""
          type="text"
          className="input"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <span>Username</span>
        {errors.username && <p className="error">{errors.username}</p>}
      </label> */}

      <label>
        <input
          required
          placeholder=""
          type="password"
          className="input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>Password</span>
        {errors.password && <p className="error">{errors.password}</p>}
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          className="input"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
        />
        <span>Confirm Password</span>
        {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
      </label>
      <label>
        <input
          required
          placeholder=""
          type="number"
          className="input"
          name="aadharno"
          value={formData.aadharno}
          onChange={handleChange}
        />
        <span>Aadhar No</span>
        {errors.aadharno && <p className="error">{errors.aadharno}</p>}
      </label>
      <button type="submit" className="submit">Submit</button>

      <p className="signin">Already have an account? <a href='/LoginCard'>Login</a></p>
    </form>
  );
}

export default RegistrationForm;
