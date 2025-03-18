import React from 'react'; 
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import logo from '../../assets/images/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { CartContext } from "../../App.js"; 
import { useContext } from 'react';



function Header() { 
  const getData = () => {}; 

  const {cartItems, setCartItems} = useContext(CartContext);



  return (
    <header className="sticky">
        <div> 
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            Examples
          </h1> 
          <div className='cartBlock'>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="cart"/>
            <div className='cartCounter'>
              {cartItems.length}
            </div>
            </Link>
          </div> 
        </div>
      </header> 
  );
}

export default Header;