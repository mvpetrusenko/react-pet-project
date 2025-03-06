import React, { useState } from 'react';
import '../FourthPage/FourthPage.css' 
import FilterData from '../FourthPage/FilterData'; 

// search for: react jsx render (show in the frontend) object (array) 
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
// how to set name for a checkbox in react jsx




function FourthPage() { 


//   const FilterData = [
//     {
//         id: "1", 
//         name: "laptop", 
//         category: "technology", 
//         color: "gray", 
//         price: 50
//     }, 
//     {
//         id: "2", 
//         name: "chair", 
//         category: "furniture", 
//         color: "brown", 
//         price: 100
//     }, 
//     {
//         id: "3", 
//         name: "phone", 
//         category: "technology", 
//         color: "red", 
//         price: 150
//     }, 
//     {
//         id: "4", 
//         name: "powerbank", 
//         category: "technology", 
//         color: "black", 
//         price: 200
//     }, 
//     {
//         id: "5", 
//         name: "jacket", 
//         category: "clothes", 
//         color: "black", 
//         price: 250
//     }, 
//     {
//         id: "6", 
//         name: "boots", 
//         category: "clothes", 
//         color: "brown", 
//         price: 300
//     }, 
//     {
//         id: "7", 
//         name: "shirt", 
//         category: "clothes", 
//         color: "brown", 
//         price: 350
//     }, 
//     {
//         id: "8", 
//         name: "jeans", 
//         category: "clothes", 
//         color: "blue", 
//         price: 400
//     }, 
//     {
//         id: "9", 
//         name: "banana", 
//         category: "food", 
//         color: "yellow", 
//         price: 450
//     }
// ]





// const filterDataCards = FilterData.map(card => <li>{card}</li>); 
// first: breack up li (cards) object on fields 
// then return them in ul (filterDataCards)

const filterDataCards = FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
      <p style={{backgroundColor: "purple", color: "white"}}>{card.price}</p>
    </div> 
</li>); 

// console.log('card fields', filterDataCards)





// change checked from initial value (false) to changed value (setChecked(true))
const [checked, setChecked] = useState(false) 

// const filterDataCards = FilterData.map(card => <li>{card}</li>); 
// first: breack up li (cards) object on fields 
// then return them in ul (filterDataCards)

// !!! with console.log or debug find in which step there is a problem (to see what value returned)
// !!! what element returns (array, string...) to work with in the next step
const[filteredcategory, setFilteredcategory] = useState('') 



const handleFilterCategory = (event) => { 
    // ensure which checkbox has been clicked in the filter 
    // event.target gives you the element that triggered the event 
    // event.target.value retrieves the value of that element (an input field, for example)
    // !! what element has been clicked (triggered) - const checkedCheckbox = event.target 
    // !! what is the value of clicked element - const checkedCheckbox = event.target.value () : 
    // <input type='checkbox' name='technology' value='technology' onClick={handleCheckbox}></input> 
    // Checkbox has been checked: technology
    const checkedCheckbox = event.target.value
    setChecked(checkedCheckbox) 
    console.log('Checkbox has been checked: ', checkedCheckbox) 


    // filter - returns array (cards only with chosen category)
    // const filteredCategory = FilterData.filter(item => 
    //   <p>{item.category}</p>) 
    //   console.log('filtered category', item) 


    // if inside map - wrap if with {} (item => {}) 
    // map - run throught FilterData (cards) and check each card (item) on card fields 
    // but use filter() instead of map() to return only filtered array of cards
    // if card category field = checked checkbox  return cards with this category (filteredCategory) 
    // if any of checkbox not checked - show all cards (filterDataCards)
    // if checkbox is checked - show cards with this category (filteredCategory) 


  //   const filteredcategory = FilterData.filter(item => {
  //     if (item.category === checkedCheckbox) {
  //       console.log('checkbox = category: ', checkedCheckbox) 
  //       return item;
  //     } 
  //   }   
    
  // );

  // console.log('Filtered category by chosen checkbox: ', filteredcategory) 




  setFilteredcategory(FilterData.filter(item => {
    if (item.category === checkedCheckbox) {
      console.log('checkbox = category: ', checkedCheckbox) 
      return item;
    } 
  }   
  
));

console.log('Filtered category by chosen checkbox: ', filteredcategory) 

 


  // {
  //   if (setChecked) {
  //     return <ul>{filteredCategory}</ul>
  //   }
  //   return <ul>{filterDataCards}</ul>
  // }


  


  // if (filteredCategory) 
  //   return <ul>{filteredCategory}</ul>  
  // else 
  //   return <ul>{filterDataCards}</ul>  
  






    // loop cards and
    // if checkbox is checked (setChecked(true)) filter where card.category = category.value 
    // if clicked on checkbox Technology (card.category) show cards with label Technology (category.value) 
    // if(setChecked) {
    //     return card.category
    // }
}




const [checkedColor, setCheckedColor] = useState(false) 
const[filteredcolor, setFilteredColor] = useState('') 

const handleFilterColor = (event) => { 

    const checkedColorCheckbox = event.target.value
    setCheckedColor(checkedColorCheckbox) 
    console.log('Checkbox has been checked: ', checkedColorCheckbox) 

    setFilteredColor(FilterData.filter(item => {
      if (item.color === checkedColorCheckbox) {
        console.log('checkbox = color: ', checkedColorCheckbox) 
        return item;
      } 
    }   
    
  ));
  
  console.log('Filtered color by chosen checkbox: ', filteredcolor) 

}





  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fourth Page Content</p> 


            <div className='filterSortingBlock'>


                <div className='filter'>
                    <p>Filter</p> 
                    <div className='filterCategory'>
                        <p>Category</p> 
                        <div className='checkboxGroup'>
                          <input type='checkbox' name='technology' value='technology' filteredCategory={true} onClick={handleFilterCategory}></input>
                          <label htmlFor='technology'>Technology</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='furniture' value='furniture' onClick={handleFilterCategory}></input>
                          <label htmlFor='furniture'>Furniture</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='clothes' value='clothes' onClick={handleFilterCategory}></input>
                          <label htmlFor='clothes'>Clothes</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='food' value='food' onClick={handleFilterCategory}></input>
                          <label htmlFor='food'>Food</label>
                        </div>
                    
                    </div>


                
                    <div className='filterColor'>
                        <p>Color</p> 

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='gray' value='gray' onClick={handleFilterColor}></input>
                          <label htmlFor='gray'>Gray</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='brown' value='brown' onClick={handleFilterColor}></input>
                          <label htmlFor='brown'>Brown</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='red' value='red' onClick={handleFilterColor}></input>
                          <label htmlFor='red'>Red</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='black' value='black' onClick={handleFilterColor}></input>
                          <label htmlFor='black'>Black</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='blue' value='blue' onClick={handleFilterColor}></input>
                          <label htmlFor='blue'>Blue</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='yellow' value='yellow' onClick={handleFilterColor}></input>
                          <label htmlFor='yellow'>Yellow</label>
                        </div>

                    
                    </div>
                </div>
          

              {/* <ul>{filterDataCards}</ul>   */}

              {/* <ul>{filterDataCards}</ul> 



              if (filteredCategory) 
    return filteredCategory
  else 
    return filterDataCards */} 


              {/* <ul>{filteredCategory ? filteredCategory : filterDataCards}</ul> */} 






            
                  {/* !!!!! if checkbox is not clicked - returns filterDataCards, if clicked - filteredCategory
                  {checked ? <ul>filteredCategory</ul> : <ul>filterDataCards</ul>} */}

                  {/* ! filteredCategory - undefined: */}
                  {/* {checked ? <ul>{filteredCategory}</ul> : <ul>{filterDataCards}</ul>} */} 

                  {/* ! returns array of filtered category in console:
                  {checked ? <ul>{console.log({filteredcategory})}</ul> : <ul>{filterDataCards}</ul>} */} 






                
                  {/* !!!!!!Objects are not valid as a React child - error in console
                  !!!!!Your data homes is an array, so you would have to iterate over the array using map: 
                  {homes.map(home => <div>{home.name}</div>)} */}
                  {/* {checked ? <ul>{filteredcategory.map(filteredc => <li>{filteredc.name}</li>)}</ul> : <ul>{filterDataCards}</ul>} */} 

                  {/* {checked ? <ul>{filteredcategory.map(filteredc => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredc.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredc.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredc.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredc.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : <ul>{filterDataCards}</ul>} */}









                  {/* filter color:      */}
                  {/* {checked ? <ul>{filteredcolor.map(filteredcol => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredcol.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredcol.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredcol.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredcol.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : null} */} 



                      

                  {/* rendering multiple conditions ternary operator in React: 
                  <h1 id="id1">
                      {
                          isEnvironmentBFE
                          ? (
                              outputba(
                                "b",
                                "ba",
                                this.props.lang
                          )
                          ) : NEW CONDITIONAL HERE
                          ? (NEW RESULT)
                          : (
                            outputba(
                              "a",
                              "ab",
                              this.props.lang
                        )
                      )
                    }
              </h1>


              !!!!  : checkedColor ? (else if - else if : a = 1 ? return b) */}
                  {checked ? <ul>{filteredcategory.map(filteredc => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredc.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredc.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredc.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredc.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : checkedColor ? <ul>{filteredcolor.map(filteredcol => <li>
                    <div className='filterCard'>
                        <p style={{backgroundColor: "white"}}>{filteredcol.name}</p>
                        <p style={{backgroundColor: "lightBlue"}}>{filteredcol.category}</p>
                        <p style={{backgroundColor: "lightPink"}}>{filteredcol.color}</p>
                        <p style={{backgroundColor: "purple", color: "white"}}>{filteredcol.price}</p>
                    </div> 
                  </li>)}</ul> 
                  : <ul>{filterDataCards}</ul>}



                  {/* FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
      <p style={{backgroundColor: "purple", color: "white"}}>{card.price}</p>
    </div> 
</li>); */}



                {/* {
                  if (setChecked) {
                    return <ul>{filteredCategory}</ul>
                  }
                  return <ul>{filterDataCards}</ul>
                } */} 



            


              {/* <div>{filteredCategory}</div> */}


                <div className='sorting'>
                  <p>Sorting</p>
                </div>



            </div> 

        </div>

    </div>

   );
        
}

export default FourthPage;