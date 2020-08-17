import React from 'react';
// components
import { LoginForm } from '../components';

const Login = () => {
  return (
    <React.Fragment>
      <div className="container">
        <LoginForm title="Login into your account" />
      </div>
    </React.Fragment>
  );
};


export default Login;