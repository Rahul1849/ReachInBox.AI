// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-7sfaldfu78414dhz.us.auth0.com"
    clientId="CZBMULtItYB6w5xuCntdOTpjJEpgFhgC"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Auth0Provider>
);
