import React, { useState } from 'react';
import '../FourthPage/FourthPage.css' 

// search for: react jsx render object (array) 
// [] - array, {} - object 
// display multiple similar components from a collection of data 
// filter and transform your array of data into an array of components 
// !!! React rendering lists 

// Objects are not valid as a React child (found: object with keys {id, name, 
// category, color}). If you meant to render a collection of 
// children, use an array instead: 
// To fix this error break up object on strings: 
// const filterDataCards = FilterData.map(card => <li>
  // <p>{card.name}</p>
  // </li>); 


// css ul (not li !!!!) remove bullets (dots)




function FourthPage() { 


  const FilterData = [
    {
        id: "1", 
        name: "laptop", 
        category: "technology", 
        color: "gray"
    }, 
    {
        id: "2", 
        name: "chair", 
        category: "furniture", 
        color: "brown"
    }, 
    {
        id: "3", 
        name: "phone", 
        category: "technology", 
        color: "red"
    }, 
    {
        id: "4", 
        name: "powerbank", 
        category: "technology", 
        color: "black"
    }, 
    {
        id: "5", 
        name: "jacket", 
        category: "clothes", 
        color: "black"
    }, 
    {
        id: "6", 
        name: "boots", 
        category: "clothes", 
        color: "brown"
    }, 
    {
        id: "7", 
        name: "shirt", 
        category: "clothes", 
        color: "brown"
    }, 
    {
        id: "8", 
        name: "jeans", 
        category: "clothes", 
        color: "blue"
    }, 
    {
        id: "9", 
        name: "banana", 
        category: "food", 
        color: "yellow"
    }
]





// const filterDataCards = FilterData.map(card => <li>{card}</li>);

const filterDataCards = FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
    </div>
</li>);


  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fourth Page Content</p> 
          

              <ul>{filterDataCards}</ul>


        </div> 

        

    </div>

   );
        
}

export default FourthPage;