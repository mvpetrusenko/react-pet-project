import React, { useState } from 'react';
import '../ThirdPage/ThirdPage.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function ThirdPage() { 

const [searchValue, setSearchValue] = useState('') 
const searchListItems = document.querySelectorAll('div#searchResultBlock p') 

const handleSearch = (event) => {  

    const changedSearchValue = event.target.value.toLowerCase(); 

    setSearchValue(changedSearchValue) 

      searchListItems.forEach((item) => {
          const itemText = item.textContent.toLowerCase(); 
          if (itemText.includes(changedSearchValue)) { 
              item.style.display = ''; 
          } else {
              item.style.display = 'none'; 
          }
      });
  }; 



  const handleClearInput = () => {
      setSearchValue('') 
      searchListItems.forEach((item) => {
        item.style.display = '';
    });
      
  }


  return ( 
    <div className='container'>
        <div className="content"> 
            <p>Third Page Content</p>
        </div> 

        <div className='searchBlock'>
          <input type='text' 
          value={searchValue} 
          onChange={handleSearch}
          autoComplete='off' 
          placeholder='Search...'
          className='searchInput'></input> 

          <button className='buttonClearInput' onClick={handleClearInput}><FontAwesomeIcon icon={faXmark} 
            className="magnifyingGlassIcon"/></button>
        </div> 

        <div id='searchResultBlock' className='searchResult'>
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
    </div>
  );
}

export default ThirdPage;