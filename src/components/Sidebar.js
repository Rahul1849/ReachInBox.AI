import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/home" className="sidebar-item">Home</Link>
      <Link to="/search" className="sidebar-item">Search</Link>
      <Link to="/inbox" className="sidebar-item">Inbox</Link>
      <Link to="/sent" className="sidebar-item">Sent</Link>
      <Link to="/layout" className="sidebar-item">Layout</Link>
      <Link to="/notifications" className="sidebar-item">Notifications</Link>
      <Link to="/tracking" className="sidebar-item">Tracking</Link>
    </aside>
  );
};

export default Sidebar;
