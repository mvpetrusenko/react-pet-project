import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './AddToCartElement.css' 


function AddToCartElement() { 

   let initialText = 'Buy Now';

   const [buttonText, setButtonText] = useState(initialText);

   const handleAddToCartButtonClick = () => {
    setButtonText('Added to Cart');
  }



  return (
    <addToCartElement className="addToCartElement">
        <Link to="/" onClick={handleAddToCartButtonClick}>{buttonText}</Link>
    </addToCartElement>
  );
}

export default AddToCartElement;