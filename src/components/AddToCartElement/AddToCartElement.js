import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './AddToCartElement.css' 


function AddToCartElement() { 

   let initialText = 'Buy Now';

   const [buttonText, setButtonText] = useState(initialText);

   const handleAddToCart = () => {
    setButtonText('Added to Cart'); 
    handleChangeCounterNumber();
  }



  return (
    <addToCartElement className="addToCartElement">
        <Link to="/" onClick={handleAddToCart}>{buttonText}</Link> 
    </addToCartElement>
  );
}

export default AddToCartElement;