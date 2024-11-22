import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ active }) {
  return (
    <nav className={`nav-menu ${active ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Nav;