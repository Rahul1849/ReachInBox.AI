import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginWithRedirect, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
