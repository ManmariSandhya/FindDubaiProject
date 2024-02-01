// UserSignUp.js
import React, { useState } from 'react';
import './user-signin.css';

const UserSignIn = ({ onSubmit }) => {
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
      style={{borderRadius:"15px"}}>Sign In as User</button>
    </form>
  );
};

export default UserSignIn;