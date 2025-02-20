
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

*/


import React from "react"; 
import '../Card/Card.css'





function Card(props) {


    return ( 
    <div>
        {props.details.map((value) => ( 
        <div className="cardContainer" key={value.id}>
            <img className="cardImage" src={value.image} alt="Card Image"></img>
            <span className="cardTitle">{value.title}</span>
            <p className="cardPrice">{value.price}</p>
        </div>
        ))} 
    </div>
    );
}

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




export default Card;