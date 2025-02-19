import React from 'react';
import '../ThirdPage/ThirdPage.css' 
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'; 

function ThirdPage() {
  return ( 
    <div>
        {<Header />}
        {<NavBar />}
        <div className="content"> 
            <p>Third Page Content</p>
        </div>
        {<Footer />}
      
    </div>
  );
}

export default ThirdPage;