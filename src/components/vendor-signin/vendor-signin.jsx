import React, { useState } from 'react';
import './vendor-signin.css';

const VendorSignIn = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    vendorEmail: '',
    vendorPassword: '',
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
    <form onSubmit={handleSubmit}>
      <h3 style={{textAlign:"center"}}>Vendor </h3>
      {/* ... Vendor form fields ... */}
      
       
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
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
      style={{borderRadius:"15px"}}>Sign In as Vendor</button>
    </form>
  );
};

export default VendorSignIn;