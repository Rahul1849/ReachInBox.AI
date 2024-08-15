// src/components/Header.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth0();

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo">
        <Link to="/">REACHINBOX</Link>
      </div>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </header>
  );
};

export default Header;
