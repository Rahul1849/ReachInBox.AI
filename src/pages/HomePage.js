import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  const sidebarStyle = {
    width: '250px',
    backgroundColor: isDarkMode ? '#333' : '#f4f4f4',
    color: isDarkMode ? '#fff' : '#333',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  };

  const sidebarItemStyle = {
    textDecoration: 'none',
    color: isDarkMode ? '#ccc' : '#333',
    padding: '10px',
    fontSize: '18px',
    marginBottom: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const sidebarItemHoverStyle = {
    backgroundColor: isDarkMode ? '#555' : '#ddd',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '10px',
    color: '#fff',
    backgroundColor: isDarkMode ? '#007bff' : '#007bff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: isDarkMode ? '#0056b3' : '#0056b3',
  };

  const mainContentStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: isDarkMode ? '#222' : '#fff',
    color: isDarkMode ? '#eee' : '#333',
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: isDarkMode ? '#121212' : '#fff' }}>
      <div style={sidebarStyle}>
        <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Home</Link>
        <Link to="https://help.reachinbox.ai/en/articles/9249722-crafting-ai-prompts-step-by-step-guide" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Search</Link>
        <Link to="https://www.reachinbox.ai/Unified-Inbox" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Inbox</Link>
        <Link to="https://zapier.com/apps/reachinbox/integrations/sms/1719070/send-sms-for-new-events-in-reachinbox-with-sms-by-zapier" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Sent</Link>
        <Link to="https://www.reachinbox.ai/" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Layout</Link>
        <Link to="https://cutshort.io/company/reachinbox-75-nzykZEjW" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Notifications</Link>
        <Link to="https://help.reachinbox.ai/en/articles/8632710-implementing-a-custom-tracking-domain-in-reachinbox" style={sidebarItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = sidebarItemHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Tracking</Link>
      </div>
      <div style={mainContentStyle}>
        <h1>Welcome to ReachInbox</h1>
        <Link to="/login" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Login</Link>
        <Link to="/signup" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;
