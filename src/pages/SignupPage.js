// src/pages/SignupPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleSignup = () => {
    loginWithRedirect({
      redirect_uri: `${window.location.origin}/onebox`, // Redirect to OneboxPage after signup
    });
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <button onClick={handleSignup}>Sign up with Auth0</button>
    </div>
  );
};

export default SignupPage;
