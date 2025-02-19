import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import logo from '../../assets/images/logo.png'; 



function Header() {
  return (
    <header className="sticky">
        <div> 
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            Examples
          </h1> 
        </div>
      </header> 

  );
}

export default Header;