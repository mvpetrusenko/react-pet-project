import React, { useState } from 'react';
import '../FourthPage/FourthPage.css' 
import FilterData from '../FourthPage/FilterData'; 


function FourthPage() { 

const filterDataCards = FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
      <p style={{backgroundColor: "purple", color: "white"}}>{card.price}</p>
    </div> 
</li>); 


const [checked, setChecked] = useState(false) 

const[filteredcategory, setFilteredcategory] = useState('') 


const handleFilterCategory = (event) => { 
    const checkedCheckbox = event.target.value
    setChecked(checkedCheckbox) 


  setFilteredcategory(FilterData.filter(item => {
    if (item.category === checkedCheckbox) {
      return item;
    } 
  }   
  
));

}


const [checkedColor, setCheckedColor] = useState(false) 
const[filteredcolor, setFilteredColor] = useState('') 

const handleFilterColor = (event) => { 

    const checkedColorCheckbox = event.target.value
    setCheckedColor(checkedColorCheckbox) 
    setFilteredColor(FilterData.filter(item => {
      if (item.color === checkedColorCheckbox) {
        return item;
      } 
    }   
    
  ));

}



const [clicked, setClicked] = useState(false)
const [sortedToHigh, setSortedToHigh] = useState(FilterData) 


const handleSortLowToHigh = (event) => { 
  const clickedLowToHighButton = event.target.value
  setClicked(clickedLowToHighButton) 

  const sortedToHighArray = sortedToHigh.sort((a, b) => (a.price > b.price) ? 1 : -1)

  setSortedToHigh(sortedToHighArray)

}


const [clickedDecrese, setClickedDecrese] = useState(false)
const [sortedToLow, setSortedToLow] = useState(FilterData)

const handleSortHighToLow = (event) => { 
  const clickedHightToLowButton = event.target.value
  setClickedDecrese(clickedHightToLowButton) 

  const sortedToLowArray = sortedToLow.sort((a, b) => (b.price > a.price) ? 1 : -1)

  setSortedToLow(sortedToLowArray)

}



  return ( 
    <div>
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


                <div className='sorting'>
                  <p>Sorting</p> 
                  <button className='lowToHigh' onClick={handleSortLowToHigh}>Low To High</button>
                  <button className='highToLow' onClick={handleSortHighToLow}>High To Low</button>
                </div>


                {clicked ? <ul>{sortedToHigh.map(sortedToHighCard => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{sortedToHighCard.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{sortedToHighCard.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{sortedToHighCard.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{sortedToHighCard.price}</p>
                      </div> 
                    </li>)}</ul> 
                    : null} 


                    {clickedDecrese ? <ul>{sortedToLow.map(sortedToLowCard => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{sortedToLowCard.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{sortedToLowCard.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{sortedToLowCard.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{sortedToLowCard.price}</p>
                      </div> 
                    </li>)}</ul> 
                    : null} 
            </div> 
        </div>
    </div>
   );     
}

export default FourthPage;