/* dynamic value - value that will be changed - {} in JSX (React) 
method map returns changed data, not new data 
for each returns the same data 

in arr.map object will be returned  - not to write 4 times <Card /> 

props - when child element receives from parent element data 

Props are arguments passed into React components 
React Props are like function arguments in JavaScript and attributes in HTML - https://www.w3schools.com/react/react_props.asp 

!props help to pass data from one component to the other 


Or: 
function Card(title, image) and change {props.title} to ${title} 

!!! you cannot use map() to props, because props is an object, but map is a method for arrays 

details is a prop name 

using curly braces {} around the map function, which is incorrect in this context.  
Curly braces are used for 
embedding JavaScript expressions inside JSX, but the map function itself returns JSX 
Not: {props.details.map((value, index) 



TypeError: props.details.map is not a function = this is not an array 
map() is only for arrays 

MainPage is parent component 

if styles is DevTools are not visible = css file has not been imported  


!!! not seen css styles in DevTools - classname in css file is written incorrectly 


const [count, setCount], setCount - what we will do with count (count + 1) = how 
initial state will be changed 

useState(initial state = count value = 0) - to remember initial state of count (like variable)

count = new state variable (to remember state of variable)
*/


import React, { useState } from "react"; 
import '../Card/Card.css'; 
import AddToCartElement from '../AddToCartElement/AddToCartElement'; 

function Card({ details, addToCart }) { // Receive addToCart as a prop
    return (
        <div className="cards">
            {details.map((value) => (
                <div className="cardContainer" key={value.id}>
                    <div className="cardImageBlock">
                        <img className="cardImage" src={value.image} alt={value.title || "Product Image"} />
                    </div>
                    <div className='cardTextBlock'>
                        <span className="cardTitle">{value.title}</span>
                        <p className="cardPrice">{value.price}</p>
                        <button onClick={() => addToCart(value)}>Add to Cart</button> {/* Call addToCart */}
                    </div>

                </div>
            ))}
        </div>
    );
}


export default Card;


// function Card(props) { 


    // const [itemToCart, setItemToCart] = useState('Buy'); 

    // const handleAddToCart = () => { 
    //     setItemToCart(value.title); 
    // } 


    // 1) see button id of the clicked button in the console 
    // open console to see what button id of the clicked button is
    // const handleClickButtonId = (event) => {
    //     // const buttonId = event.currentTarget.id; 
    //     const buttonId = event.target.innerText; 
    //     console.log(buttonId);

    // } 



    // const [count, setCount] = useState(0); 


    // const handleClickButton = () => { 
    //     setCount(count + 1); 
    //     console.log('Button button clicked')
        
    // }






//     return ( 
//     <div className="cards">
//         {props.details.map((value) => ( 
//         <div className="cardContainer" key={value.id}>
//             <div className="cardImageBlock">
//                 <img className="cardImage" src={value.image} alt="Card Image"></img>
//             </div>
//             <div className='cardTextBlock'>
//                 <span className="cardTitle">{value.title}</span> 
//                 <p className="cardPrice">{value.price}</p> 
                
//                 {/* added onclick for imported component */}
//                 {/* <div onClick={handleClickButton}> 
//                     {<AddToCartElement />} 
//                 </div>  */}

//             </div> 
            
//         </div>
//         ))} 
//     </div>
//     );
// }

// const arr = [
//     {
//         id: "1", 
//         title: "", 
//         price: 100, 
//         image: "../../assets/images/apple.jpg'",
//     }, 
//     {
//         id: "2", 
//         title: "", 
//         price: 200, 
//         image: "../../assets/images/grapes.jpg",
//     }, 
//     {
//         id: "3", 
//         title: "", 
//         price: 300, 
//         image: "../../assets/images/kiwi.jpg",
//     }

// ]




// export default Card;
