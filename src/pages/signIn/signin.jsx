import React, { useState } from 'react';

import './signin.css';
import UserSignIn from '../../components/user-signin/user-signin';
import VendorSignIn from '../../components/vendor-signin/vendor-signin';


const SignIn = () => {
  const [activeForm, setActiveForm] = useState('user');

  const handleFormToggle = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="signup-container" >
      <div className="signup-form" style={{width:"500px"}}>
        <div className="form-toggle">
          <button
            onClick={() => handleFormToggle('user')}
            className={activeForm === 'user' ? 'active' : ''}
          >
            User
          </button>
          <button
            onClick={() => handleFormToggle('vendor')}
            className={activeForm === 'vendor' ? 'active' : ''} 
            
          >
            Vendor
          </button>
        </div>
        {activeForm === 'user' ? <UserSignIn /> : <VendorSignIn />}
      </div>
    </div>
  );
};

export default SignIn;