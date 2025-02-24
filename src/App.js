import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'; 
import SecondPage from './components/SecondPage/SecondPage'; 
import ThirdPage from './components/ThirdPage/ThirdPage'; 
import CartPage from './components/CartPage/CartPage'; 
import './App.css';  // Ensure you import global styles
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import { Link } from 'react-router-dom'; 
import CardData from './components/Card/CardData'; 


export const CartContext = React.createContext(null);





// The cartItems state and the useEffect hooks for local storage are now in App.js 
// This makes App.js the single source of truth for the cart data 

// cartItems and addToCart are passed down as props to MainPage, and cartItems is passed as a prop to CartPage

// CartPage no longer manages its own state or local storage. It simply receives the cartItems prop and displays it 

// Because cartItems is state in App.js, any change to it causes App.js, MainPage and CartPage to re-render 

// App.js also saves the updated cartItems to localStorage whenever it changes






function App() { 

  // const [user, setUser] = useState(null);

  const [cartItems, setCartItems] = useState([]);
  
          // Load cart items from localStorage on mount
  useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedItems);
  }, []); 


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]); 


const handleAddToCart = (product) => {
  setCartItems(prevCartItems => [...prevCartItems, product]);
};


const handleDeleteFromCart = (id) => {  // Delete function in App.js
  setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
};

// const handleDelete = (id) => {
//   const updatedCart = cartItems.filter((item) => item.id !== id);
//   setCartItems(updatedCart);
//   localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
// }; 



  


  return (
    <Router>
      <div className="App"> 
      <CartContext.Provider value={{ cartItems: cartItems, setCartItems: setCartItems }}>  

        <Header /> 
        <NavBar /> 


        <Routes>
          <Route exact path="/" element={<MainPage cardArray={CardData} addToCart={handleAddToCart} />} /> 
          <Route path="/second" element={<SecondPage />} /> 
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onDelete={handleDeleteFromCart} />} />
        </Routes> 


        {<Footer />}

        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;