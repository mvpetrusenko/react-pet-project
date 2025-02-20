import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import logo from '../../assets/images/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




function Header() { 

  let initialNumber = '0';
  
     const [counterNumber, setCounterNumber] = useState(initialNumber);
  
     const handleChangeCounterNumber = () => {
      setCounterNumber('1');
    } 



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
              {counterNumber}
            </div>
            </Link>
          </div> 
          
        
        </div>
      </header> 

  );
}

export default Header;