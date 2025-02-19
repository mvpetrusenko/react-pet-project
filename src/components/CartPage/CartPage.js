import React from 'react';
import '../CartPage/CartPage.css' 
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'; 

function CartPage() {
  return ( 
    <div>
        {<Header />}
        {<NavBar />}
        <div className="content"> 
            <p>Cart Page Content</p>
        </div> 
        
        {<Footer />}
      
    </div>
  );
}

export default CartPage;