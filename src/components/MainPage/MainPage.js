import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../MainPage/MainPage.css' 
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'; 

function MainPage() {
  return ( 
    <div>
        {<Header />}
        {<NavBar />}
        <div className="content"> 
            <p>Something to create</p>
        </div>
        {<Footer />}
      
    </div>
  );
}

export default MainPage;