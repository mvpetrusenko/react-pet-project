import React from "react"; 
import '../Card/Card.css'; 
import { CartContext } from "../../App.js"; 
import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';



function CardGroup({ cardArray, addToCart }) { 

   const {cartItems, setCartItems} = useContext(CartContext); 

   const navigate = useNavigate();

    return (
        <div className="cards">
            {cardArray.map((value) => (
                <div className="cardContainer" key={value.id}>
                    <div className="cardImageBlock">
                        <img className="cardImage" src={value.image} alt={value.title || "Product Image"} />
                    </div>
                    <div className='cardTextBlock'>
                        <span className="cardTitle">{value.title}</span>
                        <p className="cardPrice">{value.price}</p> 
                        {cartItems.filter((item) => item.id === value.id).length ? (
                        <button className="addedProductButton buyButton" onClick={() => {
                            navigate("/cart");
                            }}>Product added</button> 
                        ) : (
                            <button className="buyButton" onClick={() => {
                                addToCart(value); 
                                }}>Add to Cart</button> 
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default CardGroup;
