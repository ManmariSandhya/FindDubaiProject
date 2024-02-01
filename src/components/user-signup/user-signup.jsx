// UserSignUp.js
import React, { useState } from 'react';
import './user-signup.css';

const UserSignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h3 style={{textAlign:"center"}}>USER</h3>
      {/* ... User form fields ... */}
      <div   className="form-group">
          <label >First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className='form-control'
            style={{borderRadius:"15px"}}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className='form-control'
            style={{borderRadius:"15px"}}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='form-control'
            style={{borderRadius:"15px"}}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className='form-control'
            style={{borderRadius:"15px"}}
          />
        </div>
      <button  className="signup-button form-control mt-5" 
      type="submit"
      style={{borderRadius:"15px"}}>Sign Up as User</button>
    </form>
  );
};

export default UserSignUp;