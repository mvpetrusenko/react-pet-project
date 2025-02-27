import React from 'react';
import './ScrollToTopButton.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


// there's no need to use useState in this case, 
// because the scrolling action doesn't involve or modify any state

function ScrollToTopButton() {


    function handleToTopButtonClick () {
        window.scrollTo({top: 0, behavior: 'smooth'}); 
        // OR: document.documentElement.scrollTop = 0; 
    }




  return (
        <button 
        onClick={handleToTopButtonClick}
        className="scrollToTop"><FontAwesomeIcon icon={faArrowUp} className="arrowUp" /></button>
          

  );
}

export default ScrollToTopButton;