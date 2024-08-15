import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OneboxPage from './pages/OneboxPage';
import NotFoundPage from './pages/NotFoundPage';
import Sidebar from './components/Sidebar';

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Apply dark mode or light mode to the body element
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/onebox" element={<OneboxPage />} />
       
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
