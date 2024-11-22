import React, { useState } from 'react';
import Nav from './Nav';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <a href="/" className="logo"><img className="logo" src="./src/assets/logo.png" alt="Logo" /></a>
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <Nav active={menuActive} />
    </header>
  );
}

export default Header;