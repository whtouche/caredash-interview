import React from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header className="header">
    <h1 className="logo">I'M A LOGO</h1>
    <ul className="nav">
      <li>
        <Dropdown />
      </li>
      <li>
        <Dropdown />
      </li>
      <li>
        <Dropdown />
      </li>
    </ul>
  </header>
  );
};

export default Header;