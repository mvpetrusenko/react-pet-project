import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'; 
import SecondPage from './components/SecondPage/SecondPage'; 
import ThirdPage from './components/ThirdPage/ThirdPage'; 
import CartPage from './components/CartPage/CartPage'; 
import './App.css';  // Ensure you import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} /> 
          <Route path="/second" element={<SecondPage />} /> 
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;