import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'; 
import SecondPage from './components/SecondPage/SecondPage'; 
import ThirdPage from './components/ThirdPage/ThirdPage'; 
import FourthPage from './components/FourthPage/FourthPage'; 
import FifthPage from './components/FifthPage/FifthPage';
import CartPage from './components/CartPage/CartPage'; 
import './App.css';  // Ensure you import global styles
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import { Link } from 'react-router-dom'; 
import CardData from './components/Card/CardData'; 


// creating context

export const CartContext = React.createContext(null);





// The cartItems state and the useEffect hooks for local storage are now in App.js 
// This makes App.js the single source of truth for the cart data 

// cartItems and addToCart are passed down as props to MainPage, and cartItems is passed as a prop to CartPage

// CartPage no longer manages its own state or local storage. It simply receives the cartItems prop and displays it 

// Because cartItems is state in App.js, any change to it causes App.js, MainPage and CartPage to re-render 

// App.js also saves the updated cartItems to localStorage whenever it changes






function App() { 

  // const [user, setUser] = useState(null); 

  // useState - updating data passed via context 
  const [cartItems, setCartItems] = useState([]); 
 


  
  

  // The useEffect Hook allows you to perform side effects in your components 
  // Some examples of side effects are: fetching data, directly updating the DOM, and timers
          // Load cart items from localStorage on mount 

  // set local storage - where to save data (on main page after clicking add to cart button) 
  // get - on App.js, because we need saved data in header, main page and cart page 
  // get - not on cart page        
  useEffect(() => { 
      // alert('getItem');
      const storedItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
      // console.log(localStorage.getItem('cartItems'));
      // alert(storedItems);
      setCartItems(storedItems); 
      
  }, []); 

// if useEffect is wrapped in a function, the name of the function should start on use... 




  // function useAddToLocalStorage() { 
  //   // alert('setItem');
  //   useEffect(() => {
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]); 
  // }


  

// const handleAddToCart = (product) => {
//   setCartItems(prevCartItems => [...prevCartItems, product]);
// };


// const handleDeleteFromCart = (id) => {  // Delete function in App.js
//   setCartItems(prevCartItems => prev(item => item.id !== id));
// };

// const handleDelete = (id) => {
//   const updatedCart = cartItems.filter((item) => item.id !== id);
//   setCartItems(updatedCart);
//   localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
// }; 



  // CartContext.Provider value= - passing data to context (wrap components into context component)
  // value = prop (data for sharing), context value for all wrapped components 
  // Provider provides context value to components

  return (
    <Router>
      <div className="App"> 
      <CartContext.Provider value={{ cartItems: cartItems, setCartItems: setCartItems }}>  

        <Header /> 
        <NavBar /> 


        <Routes>
          {/* <Route exact path="/" element={<MainPage cardArray={CardData} addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onDelete={handleDeleteFromCart} />} />  */}


          <Route exact path="/" element={<MainPage />} /> 
          <Route path="/second" element={<SecondPage />} /> 
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/fourth" element={<FourthPage />} /> 
          <Route path="/fifth" element={<FifthPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes> 


        {<Footer />}

        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;