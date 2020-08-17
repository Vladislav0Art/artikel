import React from 'react';
// components
import { RegisterForm } from '../components';

const Register = () => {
  return (
    <React.Fragment>
      <div className="container">
        <RegisterForm title="Register a new account" />
      </div>
    </React.Fragment>
  );
};


export default Register;