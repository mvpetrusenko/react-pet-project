import React from 'react';
import '../ThirdPage/ThirdPage.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 

function ThirdPage() {
  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Third Page Content</p>
        </div> 


        <div className='searchBlock'>
          <input type='text' 
          autoComplete='off' 
          placeholder='Search...'
          className='searchInput'></input>

          <button className='buttonSearch'><FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlassIcon"/></button>
        </div> 


        <div className='searchResult'>
            <p style={{color: "red", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Red</p> 
            <p style={{color: "green", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Green</p> 
            <p style={{color: "yellow", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Yellow</p> 
            <p style={{color: "orange", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Orange</p> 
            <p style={{color: "blue", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Blue</p> 
            <p style={{color: "purple", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Purple</p>
            <p style={{color: "pink", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Pink</p> 
            <p style={{color: "white", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>White</p> 
            <p style={{color: "lightGray", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Gray</p>      
            <p style={{color: "black", fontStyle: "italic", fontWeight: "bold", 
              fontSize: "30px", borderStyle: "double", 
              border: "3px solid white"}}>Black</p>             
        </div>
        {/* {<Footer />} */}
      
    </div>
  );
}

export default ThirdPage;