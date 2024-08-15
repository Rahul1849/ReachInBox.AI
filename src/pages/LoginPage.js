// src/pages/LoginPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect({
      redirect_uri: `${window.location.origin}/onebox`, // Redirect to OneboxPage after login
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in with Auth0</button>
    </div>
  );
};

export default LoginPage;
