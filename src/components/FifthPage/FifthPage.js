import React, { useState } from 'react';
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



function FifthPage() { 


  // setAttribute(name, value)
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }


  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
  }



  // event.target.checked - checked toggle checkbox
  const switchTheme = (event) => {
    if (event.target.checked) setDarkMode(); 
    else setLightMode()
  };

  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fifth Page Content</p> 

            <label className='switchModeContainer'>
              <input type='checkbox' 
                      id='checkboxSwitch'
                      onChange={switchTheme}></input> 
              <label htmlFor='checkboxSwitch' className='sliderSwitch'></label>
            </label>
        </div>

    </div>

   );
        
}

export default FifthPage;