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
            <p></p>
        </div>
        {/* {<Footer />} */}
      
    </div>
  );
}

export default ThirdPage;