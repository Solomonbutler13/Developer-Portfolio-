import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar-initials">
        SOLOMON BUTLER
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
