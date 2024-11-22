import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ active }) {
  return (
    <nav className={`nav-menu ${active ? 'active' : ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;