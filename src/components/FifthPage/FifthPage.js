import React, { useEffect, useState } from 'react';
import '../FifthPage/FifthPage.css' 
import '../FifthPage/DarkTheme.css' 
import '../FifthPage/LightTheme.css' 




// In JS: 

// body {
//   padding: 25px;
//   background-color: white;
//   color: black;
//   font-size: 25px;
// }

// .dark-mode {
//   background-color: black;
//   color: white;
// } 


// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }


// ::before pseudo-element inserts some content before the content of the specified element


// To toggle the theme when clicking the sliderSwitch label instead 
// of the checkbox directly, one need to:

// Associate the Label with the Checkbox Correctly: Ensure the 
// htmlFor attribute of the sliderSwitch label matches the id of the checkbox. 

// check saved localStorage in DevTools - Application - Local storage - localhost

// The localStorage and sessionStorage properties allow saving key/value pairs in a web browser.

// The localStorage object stores data with no expiration date. The data 
// will not be deleted when the browser is closed and will be available the next day, week, or year



// const [wins, setWins] = useState(() => {
//   const storageWins = localStorage.getItem('wins'); 

//   localStorage.setItem('wins', wins) 


// You can simply set an item into the localStorage with:

// localStorage.setItem('key', value);
// and then access it with

// let value = localStorage.getItem('key');





// localStorage.setItem("theme",JSON.stringify({theme: "dark"})); 


// e.checked
//       ? (document.body.setAttribute("data-theme", "dark"),
//         localStorage.setItem("darkSwitch", "dark")) //set to dark
//       : (document.body.setAttribute("data-theme", "light"),
//         localStorage.setItem("darkSwitch", "dark")); 



//         const currentTheme = localStorage.getItem('theme'); 
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//         document.body.classList.toggle('dark'); 



// localStorage.setItem(key, JSON.stringify(value)); 
// JSON.parse(localStorage.getItem(key));

// To deal not with string, but object: 
// localStorage.setItem('user', JSON.stringify(user)); 
// const user = JSON.parse(localStorage.getItem('user')); 
// localstorage does not support objects. If you want to 
// store the user in localstorage, you need to stringify it: JSON.stringify(user)


function FifthPage() { 


  // localStorage is similar to sessionStorage, except that 
  // while localStorage data has no expiration time, sessionStorage 
  // data gets cleared when the page session ends — that is, when the 
  // page is closed. (localStorage data for a document loaded in a "private browsing"  
  // or "incognito" session is cleared when the last "private" tab is closed.)

  // let currentTheme = localStorage.getItem('theme') 
  // const currentTheme = JSON.parse(localStorage.getItem('theme'));
  

  // setAttribute(name, value) 
  // set(key, value), get(key) - return value (as in variable const a = 1, a - key, 1 - value)
    //  const currentTheme = localStorage.getItem('theme') - returns 'dark'

    // localStorage.setItem('theme', 'dark'); 
    // change to dark mode: DarkTheme.csss ([data-theme='dark']) 
    // document.querySelector('body').setAttribute('data-theme', 'dark') 
    // localStorage.setItem('theme', 'dark'); 

    // localStorage.setItem('theme', JSON.stringify('dark')); 


    const setDarkMode = () => { 
      
      document.querySelector('body').setAttribute('data-theme', 'dark') 
      // localStorage.setItem("darkSwitch", "dark") 
      

  }


  




  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light') 
    // localStorage.setItem('theme', 'light'); 
    // localStorage.setItem('theme', JSON.stringify('light')); 
  }



  // event.target.checked - checked toggle checkbox 
  const switchTheme = (event) => {
    const checked = event.target.checked; 
    console.log('Check or not toggle checkbox: ', checked) 
    // on checked toggle theme checkbox - turn to dark mode
    if (checked) setDarkMode(); 
    else setLightMode() 

    

    
    // if turned to dark mode - save to local storage theme key with value dark
    localStorage.setItem('theme', checked ? 'dark' : 'light');  
 
    

    

    // typeof currentTheme = string 
    // get value dark from local storage
    const currentTheme = localStorage.getItem('theme') 
    console.log('Current theme mode: ', currentTheme) 

    





    // after reloading page have still dark theme
    // if(currentTheme === 'dark') {
    //   const darkTheme = localStorage.setItem('theme', 'dark'); 
    //   console.log('After refresh dark theme: ', darkTheme)
    // }


  };

  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fifth Page Content</p> 

            <label className='switchModeContainer'>
              <input className='inputCheckboxSwitch' type='checkbox' 
                      id='checkboxSwitch'
                      onChange={switchTheme}></input> 
              <label htmlFor='checkboxSwitch' className='sliderSwitch'></label>
            </label>
        </div>

    </div>

   );
        
}

export default FifthPage;