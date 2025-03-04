import React, { useState } from 'react';
import '../ThirdPage/ThirdPage.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 

function ThirdPage() { 

//     // what value will be changed 
//     // [getter (saved value), setter (changed value)]
//     const [searchValue, setSearchValue] = useState('')


//     const handleSearch = (event) => { 
//       // console.log(searchValue) - input value in process of typing
//       const changedSearchValue = event.target.value
//       // console.log(changedSearchValue) - value in input can be see in console in DevTools
//       setSearchValue(changedSearchValue) // value in input can be see in the input field


//       // run (loop) cycle for all p elements of the listed
//       // if user`s input value = p tag text value - filter and show only this p tag 
//       // get all span elements of the page in console in DevTools 
//       const searchListValue = document.querySelectorAll('div#searchResultBlock p').textContent
// //       const searchListValue = document.querySelectorAll('div#searchResultBlock p').forEach(p=>
// //         //     {
        
// //         //     // get text from html tag  
// //             console.log(p.textContent) 
// //           ) 
// // } 

//       // i = searchListValue
//       for (var i = 0; i < searchListValue; i++) {
//         if ((changedSearchValue === searchListValue)) {
//           searchListValue[i].style.display = ''
//         } else {
//           searchListValue[i].style.display = 'none'
//         }
//       }
      

//     }



    

      // const searchListElement = () => {
      //   // div#searchResultBlock p - get all p of div with id searchResultBlock
      //   const searchListValue = document.querySelectorAll('div#searchResultBlock p').forEach(p=>
               
          
      //     //     // get text from html tag  
      //         console.log(p.textContent) 
      //       ) 
      //   } 







// // get all span elements of the page in console in DevTools
// function handleSearch () {
//   document.querySelectorAll('p').forEach(p=>
//     {

//     // get text from html tag  
//     console.log(p.textContent)
//     })
// }
    
// document.querySelectorAll('div#searchResultBlock p').textContent - returns array, with array can`t be textContent
// My variant: 
// const [searchValue, setSearchValue] = useState('') 

// const handleSearch = (event) => {  

//     const changedSearchValue = event.target.value

//     setSearchValue(changedSearchValue) 

//     const searchListValue = document.querySelectorAll('div#searchResultBlock p').textContent 


//     for (var i = 0; i < searchListValue; i++) {
//         if ((changedSearchValue === searchListValue)) {
//           searchListValue[i].style.display = ''
//         } else {
//           searchListValue[i].style.display = 'none'
//         }
//       }
// }





// Correct variant with for loop: 
// const handleSearch = (event) => {
//   const changedSearchValue = event.target.value.toLowerCase();
//   setSearchValue(changedSearchValue);

//   const searchListItems = document.querySelectorAll('div#searchResultBlock p');
//   const length = searchListItems.length; // Get the length of the NodeList

//   for (let i = 0; i < length; i++) {
//       const item = searchListItems[i]; // Get the current item
//       const itemText = item.textContent.toLowerCase();

//       if (itemText.includes(changedSearchValue)) {
//           item.style.display = '';
//       } else {
//           item.style.display = 'none';
//       }
//   }
// };






// What Happens When item.style.display = ''; is Executed:

// When you set item.style.display = '';, you are essentially removing 
// any inline display style that might have been previously applied 
// to the element.
// This causes the element to revert to its default 
// display behavior, which is usually determined by the browser's 
// default stylesheet or by any CSS rules defined in your external stylesheets.
// In the case of a <p> tag, the default display is block.
// So this line of code will make the element visible.







// Errors in my variant: 
// 1) textContent can be called on 1 element, not on array 
// 2) forEach 
// 3) includes

// Correct variant: 
const [searchValue, setSearchValue] = useState('') 

const handleSearch = (event) => {  

    const changedSearchValue = event.target.value.toLowerCase(); // !!! Convert to lowercase for case-insensitive search

    setSearchValue(changedSearchValue) 

    const searchListItems = document.querySelectorAll('div#searchResultBlock p') // Get the NodeList (returns array)



      // loop for an array of searchListItems (p colors list) 
      // string includes () method checks if phrase includes a word 
      // with array can`t be textContent, only for one item (element) 
      // textContent returns the text content of an element (one element !!!!)
      searchListItems.forEach((item) => {
          const itemText = item.textContent.toLowerCase(); // Get the text content of each p element
          if (itemText.includes(changedSearchValue)) { // Use includes for partial matches
              item.style.display = ''; // Show the item
          } else {
              item.style.display = 'none'; // Hide the item
          }
      });
  };


  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Third Page Content</p>
        </div> 


        <div className='searchBlock'>
          <input type='text' 
          // value typed by user in the search input
          value={searchValue} 
          onChange={handleSearch}
          autoComplete='off' 
          placeholder='Search...'
          className='searchInput'></input>

          {/* <button className='buttonSearch'><FontAwesomeIcon icon={faMagnifyingGlass} 
          className="magnifyingGlassIcon"/></button> */}
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
        {/* {<Footer />} */}
      
    </div>
  );
}

export default ThirdPage;