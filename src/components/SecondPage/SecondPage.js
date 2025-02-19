import React from 'react';
import '../SecondPage/SecondPage.css' 
import Header from '../Header/Header'; 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'; 

function SecondPage() {
  return ( 
    <div>
        {<Header />}
        {<NavBar />}
        <div className="content"> 
            <p>Second Page Content</p>
        </div> 
        
        {<Footer />}
      
    </div>
  );
}

export default SecondPage;