import React, { useState, useEffect } from 'react';
import '../MainPage/MainPage.css' 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import apple from '../../assets/images/apple.jpg'; 
import grapes from '../../assets/images/grapes.jpg'; 
import kiwi from '../../assets/images/kiwi.jpg'; 
import AddToCartElement from '../AddToCartElement/AddToCartElement'; 
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData'; 
import '../Card/Card.css'  

import { CartContext } from "../../App.js"; 
import { useContext } from 'react'; 




// details = cardArray 
// Card = CardGroup




// function MainPage({ addToCart0 }) {  // Receive addToCart as a prop 

function MainPage() { 
    const {cartItems, setCartItems} = useContext(CartContext); 
    
    // const context = useContext(CartContext); 

    const handleAddToCart = (product) => { 
        // alert('added');
        const updatedCart = [...cartItems, product]; // ...cartItems - existing items, product - new added product after click 
        
        setCartItems(updatedCart); 

        // set - key, value (return null) 
        // get - key - return value

        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        // after commented useAddToLocalStorage products added to cart successfully ! 
        
        // but after page refresh added product disappear because not added to local storage
        
       
        // useAddToLocalStorage(updatedCart); // Save to localStorage
        // console.log("Item added to cart:", product);
    }; 


    //  const [buttonText, setButtonText] = useState('Add to Cart'); 
    
    //   const changeButtonText = () => { 
    //       setButtonText('Product added'); 
    //   } 



      
    
      const useRedirectToCart = () => { 
        alert('4444')
          const navigate = useNavigate(); 
          navigate("/cart"); 
      }





    // const addToCart = (product) => {
    //     setCartItems(prevCartItems => [...prevCartItems, product]);
    //   }; 

    // const[item, setItem] = useState(); // local storage 
    
    //   const addToLocalStorage = (product) => {
    //     localStorage.setItem('product', JSON.stringify(product)); // set - save data
    //   }
    
    //   const [cartItems, setCartItems] = useState([]); // State for cart items
    
    //   const handleAddToCart = (product) => { // Product added to cart
    //       setCartItems([...cartItems, product]); // Add the product to the cart array 
        
    //       console.log("Item added to cart:", product); 
    //       addToLocalStorage();
    //   };






    // const [cartItems, setCartItems] = useState([]);
    // // const navigate = useNavigate(); 


    // const addToLocalStorage = (items) => {
    //     localStorage.setItem('cartItems', JSON.stringify(items));
    // };

    // const handleAddToCart = (product) => {
    //     const updatedCart = [...cartItems, product]; // ...cartItems - existing items, product - new added product after click 
    //     setCartItems(updatedCart);
    //     addToLocalStorage(updatedCart); // Save to localStorage
    //     console.log("Item added to cart:", product);
    // };


    

    // // Load cart items from localStorage on mount 
    // //!! to add more than one product !!!
    // useEffect(() => {
    //     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(storedItems);
    // }, []);

    





    // const goToCart = () => {
    //     navigate('/cart'); // Navigate to CartPage
    // };






    

    //   const getLocalStorage = () => {
    //      let product = JSON.parse(localStorage.getItem('product')); 
    //      return product; 
    //   }


  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}




        <div className="content"> 

            {/* <div className='product-items'>
                <CardGroup cardArray={CardData} /> 
                
        </div>  */}


        {/* <CardGroup cardArray={CardData} addToCart={handleAddToCart} />  */} 


        <CardGroup cardArray={CardData} addToCart={handleAddToCart} redirectToCart={useRedirectToCart} />



        
              {/* <h2>Cart</h2>  */}




              {/* <button onClick={goToCart}>Go to Cart ({cartItems.length})</button> */}






                {/* Code below to show clicked card products add to cart  */}

              {/* {cartItems.length === 0 ? (
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

                  



              )}
          </div> 




 */}


                {/* <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={apple} alt="Apple" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Apple Gala</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={grapes} alt="Grapes" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Niagara Grapes</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={kiwi} alt="Kiwi" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Hayward Kiwi</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                // </div>  */}

          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div> 
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>

        {/* </div> */}
            
            {<ScrollToTopButton />} 
            {/* Header, Footer and NavBar will be in App.js  */}
            {/* {<Footer />}   */}
      
      </div> 
    </div> 
     
  );
 } 


export default MainPage;