import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css' 


function NavBar() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="activeTab"><NavLink to="/second" activeClassName="active">Second Page</NavLink></li> 
        <li><NavLink to="/third">Third Page</NavLink></li> 
        <li><NavLink to="/fourth">Fourth Page</NavLink></li> 
        <li><NavLink to="/fifth">Fifth Page</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;