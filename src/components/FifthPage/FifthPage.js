import React from 'react';
import '../FifthPage/FifthPage.css' 
import '../FifthPage/DarkTheme.css' 
import '../FifthPage/LightTheme.css' 



function FifthPage() { 

    const setDarkMode = () => { 
      
      document.querySelector('body').setAttribute('data-theme', 'dark') 
      
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light') 
  }


  const switchTheme = (event) => {
    const checked = event.target.checked; 
    if (checked) setDarkMode(); 
    else setLightMode() 
    localStorage.setItem('theme', checked ? 'dark' : 'light');  
    const currentTheme = localStorage.getItem('theme') 

  }; 


  return ( 
    <div>
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