import React from 'react';
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

function App() { 


  return (
    <Router>
      <div className="App"> 

        <Header /> 
        <NavBar /> 


        <Routes>
          <Route exact path="/" element={<MainPage />} /> 
          <Route path="/second" element={<SecondPage />} /> 
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes> 


        {<Footer />}

      </div>
    </Router>
  );
}

export default App;