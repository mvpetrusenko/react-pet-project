import React from 'react';
import './ScrollToTopButton.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



function ScrollToTopButton() {


    function handleToTopButtonClick () {
        window.scrollTo({top: 0, behavior: 'smooth'}); 
    }



  return (
        <button 
        onClick={handleToTopButtonClick}
        className="scrollToTop"><FontAwesomeIcon icon={faArrowUp} className="arrowUp" /></button>
          

  );
}

export default ScrollToTopButton;