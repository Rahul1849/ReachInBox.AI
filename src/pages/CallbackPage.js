// src/pages/CallbackPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/onebox'); // Redirect to OneboxPage after successful login
    }
  }, [isAuthenticated, navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;
