import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './AddToCartElement.css' 


function AddToCartElement() { 

 

 








  //  let initialText = 'Buy Now';

  //  const [buttonText, setButtonText] = useState(initialText);

  //  const handleAddToCart = () => {
  //   setButtonText('Added to Cart'); 
  //   // handleChangeCounterNumber();
  // } 



  // const [count, setCount] = useState(0); 


  // const handleAddToCart = (id) => { 
  //   setCount(count + 1); 



    
    // alert('Product Added', id); 
    // console.log('clicked product: ', id);
  // }


  return (
    
    <addToCartElement className="addToCartElement">
        {/* <Link to="/" onClick={handleAddToCart}>{buttonText}</Link>  */}
        {/* <Link to="/" onClick={handleAddToCart}>Buy</Link> */}
        {/* <Link to="/" onClick={()=>handleAddToCart({key})}>Buy</Link>  */} 


        <button className='buyButton'>Buy</button>
    </addToCartElement> 
  
  );
}

export default AddToCartElement;