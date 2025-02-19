import React from 'react'; 
import { Link } from 'react-router-dom';
import './AddToCartElement.css' 


function AddToCartElement() {
  return (
    <addToCartElement className="addToCartElement">
        <Link to="/">Buy Now</Link>
    </addToCartElement>
  );
}

export default AddToCartElement;