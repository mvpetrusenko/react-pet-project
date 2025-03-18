import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'; 
import SecondPage from './components/SecondPage/SecondPage'; 
import ThirdPage from './components/ThirdPage/ThirdPage'; 
import FourthPage from './components/FourthPage/FourthPage'; 
import FifthPage from './components/FifthPage/FifthPage';
import CartPage from './components/CartPage/CartPage'; 
import './App.css';  
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 


export const CartContext = React.createContext(null);


function App() { 

  const [cartItems, setCartItems] = useState([]); 
 
  useEffect(() => { 
      const storedItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
      setCartItems(storedItems); 
      
  }, []); 


  return (
    <Router>
      <div className="App"> 
      <CartContext.Provider value={{ cartItems: cartItems, setCartItems: setCartItems }}>  

        <Header /> 
        <NavBar /> 


        <Routes>

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