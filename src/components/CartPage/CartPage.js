import React, { useState, useEffect } from 'react';
import '../CartPage/CartPage.css' 
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData';  

// get data from context in component where this data needed
import { CartContext } from "../../App.js"; 
import { useContext } from 'react';


// localStorage - data saved in browser (before clearing cash) after refreshing web page (but useState without 
// localStorage will not save data after page refreshing) 
// use localStorage for night mode, adding to cart, save form data 

// cartItems is the React state that controls what's displayed in the UI 
// storedItems is just the initial data loaded from localStorage 
//!! cartItems is the React state that holds the current cart data 


// Delete button removes the item from the UI but doesn't update localStorage, which 
// causes the deleted items to reappear on page refresh


// function CartPage({ cartItems0, onDelete }) {  // Receive cartItems as a prop //  { cartItems } Receive cartItems as a prop - to see clicked product in the cart // {getLocalStorage}

function CartPage() { 
  
  // getting data from context
  const {cartItems, setCartItems} = useContext(CartContext); 

  

  // onClick={() => handleDelete(item.id) 
  // () => - anonymous function, without name, to pass argument to created handleDelete function 
  // onClick={handleDelete} - it would work if there is no need to pass argument to the function

  // This id represents the unique identifier of the item to be removed from the cart 
  // filter creates a new array containing only the elements that pass a certain test 
  // item.id !== id: This condition checks if the id of the current item 
  // is not equal to the id that was passed to the handleDelete function 
  // If the IDs are different, the filter method keeps that item in the new array 
  //  If the IDs are the same (meaning this is the item to delete), 
  // the filter method excludes that item from the new array 

  // id - clicked product 
  // item.id - product shown in the cart page 
  // filter (stay) all products where click on delete button of id of product !== shown product = 
  // = stay only product with !! NOT CLICKED (DELETE) BUTTON (returns ARRAY) 
  // it how array filter() method works - returns array of items which passed (true) the condition 
  
  const handleDelete = (id) => { 
          const updatedCart = cartItems.filter((item) => item.id !== id); 
          setCartItems(updatedCart); 
          localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        }; 


  
  // Difference with handleDelete - we need to return not array of not clicked products, 
  // but product with clicked increase button 

  // cartItems.filter((item) => item.id === id);  - stay product WITH CLICKED button 
  // setCartItems(updatedCart) - save changes 
  // next task - increase clicked product && other cartItems - add if on NOT clicked? 

  // if clicked (===) - quantity + 1, else (if not clicked (!==) - return quantity)


    const [quantity, setQuantity] = useState(1);
  
    
      
      // const updatedCart = (cartItems.filter((item) => item.id !== id)) ? (setQuantity(quantity)) : (setQuantity(quantity + 1)); 
      
      // const notIncreasedItems = (cartItems.filter((item) => item.id !== id)); 
   


      // map() creates a new array where only the clicked item gets its quantity increased 
      // if condition inside map() 
      // item - product card 
      // using the spread syntax ...item to copy the existing item's properties) and updates the quantity property 
      // return item;: This line is executed if the if condition is false
      // item.id === id - product card with clicked increased + button 
      // The map function iterates through each item in the cartItems array 
      // If the item.id matches the id create a new object with the updated quantity and return it 
      // Otherwise (else), we simply return the original item object 
      // This ensures that only the item with the matching id has its 
      // quantity updated, while all other items remain unchanged 


      //NOT: 

      // if(cartItems.filter((item) => item.id !== id)) { 
      //   setQuantity(quantity + 1); 
      // } 

      const handleIncrease = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: (item.quantity || 1) + 1 }; // Increment quantity, default to 1
            }
            return item;
        });
        setCartItems(updatedCart);

    }



      const handleDecrease = (id) => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); 
      }







        // delete from cart 
        // After deleting an item, also update localStorage 
        // Delete button removes the item from the UI but doesn't update localStorage, which 
        // causes the deleted items to reappear on page refresh 
        /* remove item from array: 
          let value = 3

          let arr = [1, 2, 3, 4, 5, 3]

          arr = arr.filter(item => item !== value)

          console.log(arr)
          // [ 1, 2, 4, 5 ] */

        // const handleDelete = (id) => {
        //   const updatedCart = cartItems.filter((item) => item.id !== id);
        //   setCartItems(updatedCart);
        //   localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        // };
        








  return ( 
    
      <div> 
        {/* {getLocalStorage()} */}





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

                        {/* {item.quantity || 1} - to set default "1" quantity in the quantity counter  */}
                        <span className='quantityInput'>{item.quantity || 1}</span>


                        <button className='decrementButton'
                          // onClick={() => handleDecrease()}
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
  









          {/* <div className="content">
            </div>  <CardGroup cardArray={CardData} addToCart={handleAddToCart} /> 
              <h2>Cart</h2> 
              {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
              ) : (
                  

                  <div className='addedProductBlock'> 

                  <div className='addedProductImage'> 
                      {cartItems.map((item) => (
                          <img key={item.id} src={item.image} className='addedCardImage' />
                           
                      ))}
                    
                  </div> 



                    <div className='addedProductTitle'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.title}
                          </p>
                      ))}
                    </div> 

                    <div className='addedProductPrice'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.price}
                          </p>
                      ))}
                    </div> 



                    


                  </div> 

                  



              )} */}
          {/* </div>  */}


          <div>
            <p>1. clear products cards not added from page</p> 
            <p>2. cart counter + / - after clicking buy button</p> 
            <p>3. buy button changed after clicking</p> 
            <p>4. delete from cart button </p>
            <p>5. increment / decrement button on the cart page</p> 
          </div>

//       </div>
//   );
// } 

}



export default CartPage;

