import React, {useState} from 'react';
import '../CartPage/CartPage.css' 
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import Card from '../Card/Card'; 
import CardData from '../Card/CardData'; 


function CartPage() {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const handleAddToCart = (product) => { // Product added to cart
      setCartItems([...cartItems, product]); // Add the product to the cart array
      console.log("Item added to cart:", product);
  };

  return (
      <div>
          <div className="content">
              <Card details={CardData} addToCart={handleAddToCart} /> {/* Pass addToCart */}
              <h2>Cart</h2> {/* Cart title */}
              {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
              ) : (
                  // <ul>
                  //     {cartItems.map((item) => (
                  //         <li key={item.id}>
                  //           {item.title} - {item.price}
                  //         </li>
                  //     ))}
                  // </ul> 

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

                  



              )}
          </div> 


          <div>
            <p>1. clear products cards not added from page</p> 
            <p>2. cart counter + / - after clicking buy button</p> 
            <p>3. buy button changed after clicking</p> 
            <p>4. delete from cart button </p>
            <p>5. increment / decrement button on the cart page</p> 
          </div>

      </div>
  );
}

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