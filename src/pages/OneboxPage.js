import React from 'react';
import { useAuth } from '../context/AuthContext';

const OneboxPage = () => {
  const { isAuthenticated, user, logout } = useAuth();

  if (!isAuthenticated) {
    // Redirect or display a message if the user is not authenticated
    return <p>You need to log in to access this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  );
};

export default OneboxPage;
