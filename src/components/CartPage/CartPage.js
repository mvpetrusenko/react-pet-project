import React, {useState, useEffect} from 'react';
import '../CartPage/CartPage.css' 
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData';  


// localStorage - data saved in browser (before clearing cash) after refreshing web page (but useState without 
// localStorage will not save data after page refreshing) 
// use localStorage for night mode, adding to cart, save form data 

// cartItems is the React state that controls what's displayed in the UI 
// storedItems is just the initial data loaded from localStorage 
//!! cartItems is the React state that holds the current cart data


function CartPage() { //  { cartItems } Receive cartItems as a prop - to see clicked product in the cart // {getLocalStorage}


  // const[item, setItem] = useState(); // local storage 

  // const addToLocalStorage = (product) => {
  //   localStorage.setItem('product', JSON.stringify(product)); // set - save data
  // }

  // const [cartItems, setCartItems] = useState([]); // State for cart items

  // const handleAddToCart = (product) => { // Product added to cart
  //     setCartItems([...cartItems, product]); // Add the product to the cart array
  //     console.log("Item added to cart:", product); 
  //     addToLocalStorage();
  // }; 






//   const getLocalStorage = () => {
//     let product = JSON.parse(localStorage.getItem('product')); 
//     return product; 
//  } 


//





        const [cartItems, setCartItems] = useState([]);

        // Load cart items from localStorage on mount
        useEffect(() => {
            const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(storedItems);
        }, []); 



        // delete from cart 
        








  return (
      <div> 
        {/* {getLocalStorage()} */}





          <h2>Cart</h2>
          {cartItems.length === 0 ? (
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


                    <button className='deleteFromCart'
                      onClick={() =>
                        setCartItems((cartItems) =>
                          cartItems.filter(
                            // (currIteminArray) => !(currIteminArray.id === item.id)
                            (currIteminArray => currIteminArray.id !== item.id) 
                            
                    )
                  ) 
                  // setCartItems(updatedCart);
                  // addToLocalStorage(updatedCart);
                }
              >
                Delete
              </button> 

              
                    
                  </div>
                  
                ))}
            </div>
          )} 






{cartItems.length === 0 ? (
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


                    <button className='deleteFromCart'
                      onClick={() =>
                        setCartItems((cartItems) =>
                          cartItems.filter(
                            // (currIteminArray) => !(currIteminArray.id === item.id)
                            (currIteminArray => currIteminArray.id !== item.id) 
                            
                    )
                  ) 
                  // setCartItems(updatedCart);
                  // addToLocalStorage(updatedCart);
                }
              >
                Delete
              </button> 

              
                    
                  </div>
                  
                ))}
            </div>
          )}















      </div>
    );
  }









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





export default CartPage;




// function CartPage() {
//   return ( 
//     <div>
//         {/* {<Header />}
//         {<NavBar />} */}
//         <div className="content"> 
//             <p>Cart Page Content</p>
//             <Card details={value} />
//         </div> 
        
//         {/* {<Footer />} */}
      
//     </div>
//   );
// }

// export default CartPage;