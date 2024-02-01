import React, { useState } from 'react';

import './signup.component.css';
import UserSignUp from '../../components/user-signup/user-signup';
import VendorSignUp from '../../components/vendor-signup/vendor-signup';

const SignUp = () => {
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
        {activeForm === 'user' ? <UserSignUp /> : <VendorSignUp />}
      </div>
    </div>
  );
};

export default SignUp;