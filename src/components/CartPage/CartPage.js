import React, { useState } from 'react';
import '../CartPage/CartPage.css' 
import { CartContext } from "../../App.js"; 
import { useContext } from 'react';


function CartPage() { 
  
  const {cartItems, setCartItems} = useContext(CartContext); 
  
  const handleDelete = (id) => { 
          const updatedCart = cartItems.filter((item) => item.id !== id); 
          setCartItems(updatedCart); 
          localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
        }; 


    const [quantity, setQuantity] = useState(1);

      const handleIncrease = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: (item.quantity || 1) + 1, totalCost: Number(item.price) * ((item.quantity || 1) + 1) }; 
            }
            return item;
        });
        setCartItems(updatedCart);

    }


    const handleDecrease = (id) => {
      const updatedCart = cartItems.map((item) => {
          if (item.id === id) {
              return { ...item, quantity: (item.quantity || 1) - 1 }; 
          }
          return item;
      });
      setCartItems(updatedCart);

  }


  return ( 
    
      <div> 
          <h2>Cart</h2>
          {cartItems.length === 0 ?(
          <p>Cart is empty.</p>
          ) : ( 
              <div className='addedProductBlock'>
                {cartItems.map((item) => (
                  <div key={item.id} className='cartItem'>
                      <div className='addedProductImage'>
                        <img src={item.image} alt={item.title} className='addedCardImage' />
                      </div>
                      <div className='addedProductTitle'>
                        <p>{item.title}</p>
                      </div>
                      <div className='addedProductPrice'>
                        <p>{item.price}</p>
                      </div>


                    <div className='quantity'>
                        <button className='incrementButton'
                          onClick={() => handleIncrease(item.id)}
                        >+</button> 

                        <span className='quantityInput'>{item.quantity || 1}</span>
                        <button className='decrementButton'
                          onClick={() => handleDecrease(item.id)}
                        >-</button> 
                    </div>
                  
                    <button className='deleteFromCart'
                      onClick={() => handleDelete(item.id)}
                      >Delete</button> 
                  </div>
                ))}
            </div>
          )} 
      </div>
    );
}

export default CartPage;

