import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ active }) {
  const [submenuActive, setSubmenuActive] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuActive(!submenuActive);
  };

  return (
    <nav className={`nav-menu ${active ? 'active' : ''}`}>
      <Link to="/">Home</Link>
      <div className="nav-item">
        <button className="nav-button" onClick={toggleSubmenu}>
          Products
        </button>
        {submenuActive && (
          <div className="submenu">
            <Link to="/pokeapi">PokeAPI</Link>
            <Link to="/tiempo">Tiempo</Link>
            <Link to="/cripto">Cripto</Link>
          </div>
        )}
      </div>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;